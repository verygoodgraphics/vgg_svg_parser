import { optimize } from "svgo";
import fxp from "fast-xml-parser";

export function prettySvg(svgString) {
  const result = optimize(svgString, {
    js2svg: {
      indent: 2,
      pretty: true,
    },
    plugins: [],
  });
  return result?.data;
}

export function preprocessSvg(svgString) {
  const result = optimize(svgString, {
    multipass: true,
    // See https://svgo.dev/docs/plugins/
    plugins: [
      {
        name: "preset-default",
        params: {
          overrides: {
            convertColors: {
              shorthex: false,
              shortname: false,
            },
            convertShapeToPath: {
              convertArcs: true,
            },
            convertTransform: {
              convertToShorts: false,
              matrixToTransform: false,
              degPrecision: 15,
              floatPrecision: 15,
              transformPrecision: 15,
            },
            convertPathData: {
              forceAbsolutePath: true,
              floatPrecision: 15,
              transformPrecision: 15,
            },
            cleanupNumericValues: {
              floatPrecision: 15,
            },
            cleanupIds: false,
            // removeUselessStrokeAndFill: false,
          },
        },
      },
      "removeXMLNS",
      "convertStyleToAttrs",
      "removeStyleElement",
    ],
  });
  return result?.data;
}

export function xml2json(xmlString) {
  // See https://github.com/NaturalIntelligence/fast-xml-parser/blob/master/docs/v4/2.XMLparseOptions.md
  const options = {
    ignoreAttributes: false,
    attributeNamePrefix: "",
    attributesGroupName: "_props",
    allowBooleanAttributes: true,
    parseAttributeValue: true,
    alwaysCreateTextNode: true,
  };
  const xmlParser = new fxp.XMLParser(options);
  return xmlParser.parse(xmlString);
}
