export default class DevModel {
  constructor(githubUsername, techList, githubUserModel, locationModel) {
    this.name = githubUserModel.name;
    this.githubUsername = githubUsername;
    this.bio = githubUserModel.bio;
    this.avatarUrl = githubUserModel.avatarUrl;
    this.techList = techList;
    this.locationModel = locationModel;
  }
}
