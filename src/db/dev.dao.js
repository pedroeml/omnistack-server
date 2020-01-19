import Dev from './model/dev.schema';

class DevDAO {
  async find(githubUsername) {
    return await Dev.findOne({
      github_username: githubUsername,
    });
  }
  
  async findInRange(techList, lat, lng, distance) {
    return await Dev.find({
      techs: {
        $in: techList,
      },
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [lng, lat],
          },
          $maxDistance: distance,
        },
      },
    });
  }
  
  async findAll() {
    return await Dev.find();
  }
  
  async save(devModel) {
    return await Dev.create({
      name: devModel.name,
      github_username: devModel.githubUsername,
      bio: devModel.bio,
      avatar_url: devModel.avatarUrl,
      techs: devModel.techList,
      location: {
        type: 'Point',
        coordinates: [
          devModel.locationModel.longitude,
          devModel.locationModel.latitude,
        ],
      },
    });
  }
}

export default new DevDAO();
