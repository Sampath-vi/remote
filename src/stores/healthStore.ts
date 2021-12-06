import { action, observable, makeObservable, runInAction } from 'mobx';
const axios = require('axios');

interface Health {
  server: string;
  db: string;
  redis: string;
}

interface HealthStore {
  health: Health | null;
  fetchHealth: () => void;
}

class healthStore implements HealthStore {
  health = null
  constructor() {
    makeObservable(this, {
      health: observable,
      fetchHealth: action
    })
  }

  public async fetchHealth() {
    try {
      const resp = await axios.get('https://api.rudderstack.com/health');
      this.health = resp.data;
    } catch (error) {

    }
  }
}

export default new healthStore();