export const resolveTeamImage = (name?: string) => {
  if (name) {
    let type = "";
    ["jpeg", "jpg", "png"].forEach((imageType) => {
      try {
        require(`@/public/team/${name}.${imageType}`);
        type = imageType;
      } catch {}
    });
    return require(`@/public/team/${name}.${type}`).default.src;
  }
  return require("@/public/avatar.svg").default.src;
};
