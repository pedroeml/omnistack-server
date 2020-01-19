import devService from '../service/dev.service';
import ParseString from '../util/parse-string';

class SearchController {
  async index(req, res) {
    const { latitude, longitude, techs } = req.query;
    const techList = ParseString.splitString(techs);
    const devs = await devService.findInRange(techList, latitude, longitude, 10000);
  
    return res.json(devs);
  }
}


export default new SearchController();
