const VERSION = "1.0.16";
const PROPS = "_props";

export function handleSvg(data) {
  const props = data[PROPS];
  const defs = handleDefs(data["defs"]);

  // Refers to https://docs.verygoodgraphics.com/specs/vectorgraphics/overview
  // NOTE the version should be consistent with latest specs
  return {
    version: VERSION,
    fileType: 0, // unknown
    frames: [],
    references: [],
  };
}

function handleDefs(data) {
  return {};
}
