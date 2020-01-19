import DevModel from '../model/dev.model';
import LocationModel from '../model/location.model';
import devService from '../service/dev.service';
import ParseString from '../util/parse-string';

class DevController {
  async index(req, res) {
    const devs = await devService.findAll();
  
    return res.json(devs);
  }
  
  async store(req, res) {
    const { github_username, techs, latitude, longitude } = req.body;
    const techList = ParseString.splitString(techs);
  
    let dev = await devService.find(github_username);
  
    if (!dev) {
      const githubUser = await devService.findByGitUser(github_username);
      const locationModel = new LocationModel(latitude, longitude);
      const devModel = new DevModel(github_username, techList, githubUser, locationModel);
  
      dev = await devService.save(devModel);
    }
  
    return res.json(dev);
  }
}

export default new DevController();
