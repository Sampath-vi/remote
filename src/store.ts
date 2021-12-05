import { action, observable, makeObservable, runInAction } from 'mobx';
const axios = require('axios');


interface HealthStore {
  health: Record<string, string>;
  fetchHealth: () => void;
}

class healthStore implements HealthStore {

  health = { 
    server: 'fetching...', 
    db: 'fetching...', 
    redis: 'fetching...' 
  }


  constructor() {
    makeObservable(this, {
      health: observable,
      fetchHealth: action
    })
  }

  public async fetchHealth() {
    try {
      const resp = await axios.get('https://api.rudderstack.com/health');
      console.log(resp.data);
      this.health = resp.data;
    } catch (error) {

    }
  }
}

export default new healthStore();