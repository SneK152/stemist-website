export const resolveTeamImage = (name?: string, fileType?: string) => {
  return name
    ? require(`@/public/team/${name}.${fileType}`)
    : require("@/public/avatar.svg");
};
