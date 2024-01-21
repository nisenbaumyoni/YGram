import { storageService } from "./async-storage.service.js";
import { utilService } from "./util.service.js";

export const profileService = {
  query,
  save,
  remove,
  getById,
  createProfile,
  getDefaultFilter,
};

const STORAGE_KEY = "profiles";

_createMockProfiles();

async function query(filterBy) {
  let profiles = await storageService.query(STORAGE_KEY);
  if (filterBy) {
    var { type, maxBatteryStatus, minBatteryStatus, model } = filterBy;
    maxBatteryStatus = maxBatteryStatus || Infinity;
    minBatteryStatus = minBatteryStatus || 0;
    profiles = profiles.filter(
      (profile) =>
        profile.type.toLowerCase().includes(type.toLowerCase()) &&
        profile.model.toLowerCase().includes(model.toLowerCase()) &&
        profile.batteryStatus < maxBatteryStatus &&
        profile.batteryStatus > minBatteryStatus
    );
  }
  return profiles;
}

function getById(id) {
  return storageService.get(STORAGE_KEY, id);
}

function remove(id) {
  return storageService.remove(STORAGE_KEY, id);
}

function save(profileToSave) {
  if (profileToSave.id) {
    return storageService.put(STORAGE_KEY, profileToSave);
  } else {
    profileToSave.isOn = false;
    return storageService.post(STORAGE_KEY, profileToSave);
  }
}

function createProfile(model = "", type = "", batteryStatus = 100) {
  return {
    model,
    batteryStatus,
    type,
  };
}

function _createMockProfiles() {
  let profiles = utilService.loadFromStorage(STORAGE_KEY);
  if (!profiles || !profiles.length) {
    profiles = [
      { _id: "r2", model: "Salad-O-Matic", batteryStatus: 80, type: "Cooking" },
      { _id: "r3", model: "Dusty", batteryStatus: 100, type: "Cleaning" },
      {
        _id: "r1",
        model: "Dominique Sote",
        batteryStatus: 100,
        type: "Pleasure",
      },
      { _id: "r4", model: "DevTron", batteryStatus: 40, type: "Office" },
    ];
    utilService.saveToStorage(STORAGE_KEY, profiles);
  }
}

function getDefaultFilter() {
  return {};
}
