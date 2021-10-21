import axios from "axios";

export const GetGitHubProfile = async (name) => {
  var res = await axios
    .get(`https://api.github.com/users/${name}`)
    .then((res) => {
      return res.data;
    });
};
