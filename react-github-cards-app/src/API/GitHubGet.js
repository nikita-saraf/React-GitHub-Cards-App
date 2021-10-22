import axios from "axios";

export const GetGitHubProfile = async (name) =>
  await axios.get(`https://api.github.com/users/${name}`);
