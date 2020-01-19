import devDAO from '../db/dev.dao';
import GithubUserModel from '../model/github-user.model';
import devRestService from './dev-rest.service';

class DevService {
  async findByGitUser(githubUsername) {
    const response = await devRestService.getByGitUser(githubUsername);
    const { login, name = login, avatar_url, bio } = response.data;

    return new GithubUserModel(name, avatar_url, bio);
  }

  async find(githubUsername) {
    // TODO: map to Model before returning
    return await devDAO.find(githubUsername);
  }

  async findInRange(techList, lat, lng, distance) {
    // TODO: map to Model before returning
    return await devDAO.findInRange(techList, lat, lng, distance);
  }

  async findAll() {
    // TODO: map to Model before returning
    return await devDAO.findAll();
  }

  async save(devModel) {
    // TODO: map to Model before returning
    return await devDAO.save(devModel);
  }
}

export default new DevService();
