import { optimize } from 'svgo';

export function prettySvg(svgString) {
  const result = optimize(svgString, {
    js2svg: {
      indent: 2,
      pretty: true,
    },
    plugins: [
    ],
  });
  return result?.data;
}

export function preprocessSvg(svgString) {
  const result = optimize(svgString, {
    multipass: true,
    plugins: [
      {
        name: 'preset-default',
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
            },
            convertPathData: {
              forceAbsolutePath: true,
            },
            cleanupIds: false,
            // removeUselessStrokeAndFill: false,
          },
        },
      },
      'removeXMLNS',
      'convertStyleToAttrs',
      'removeStyleElement',
    ],
  })
  return result?.data;
}
