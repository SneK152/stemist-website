export const resolveTeamImage = (name?: string, fileType?: string) => {
  return name
    ? require(`@/public/team/${name}.${fileType}`).default.src
    : require("@/public/avatar.svg").default.src;
};
