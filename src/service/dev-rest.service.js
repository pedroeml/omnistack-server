import axios from 'axios';
import env from '../config/env';

class DevRestService {
  constructor(githubAPI) {
    this.githubAPI = githubAPI;
  }

  async getByGitUser(githubUsername) {
    return await axios.get(`${this.githubAPI}/users/${githubUsername}`);
  }
}

export default new DevRestService(env.GITHUB_API);
