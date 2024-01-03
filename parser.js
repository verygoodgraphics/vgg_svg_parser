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

export function parseSvg(svgString) {
  const result = optimize(svgString, {
    plugins: [
      'preset-default',
    ],
  })
  return result?.data;
}
