import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'

export const storyService = {
    query,
    save,
    remove,
    getById,
    createStory,
    getDefaultFilter
}

const STORAGE_KEY = 'stories'

_createStories()

async function query(filterBy) {
    let stories = await storageService.query(STORAGE_KEY)
    if (filterBy) {
        var { type, maxBatteryStatus, minBatteryStatus, model } = filterBy
        maxBatteryStatus = maxBatteryStatus || Infinity
        minBatteryStatus = minBatteryStatus || 0
        stories = stories.filter(story => story.type.toLowerCase().includes(type.toLowerCase()) && story.model.toLowerCase().includes(model.toLowerCase())
            && (story.batteryStatus < maxBatteryStatus)
            && story.batteryStatus > minBatteryStatus)
    }
    return stories
}

function getById(id) {
    return storageService.get(STORAGE_KEY, id)
}

function remove(id) {
    return storageService.remove(STORAGE_KEY, id)
}

function save(storyToSave) {
    if (storyToSave.id) {
        return storageService.put(STORAGE_KEY, storyToSave)
    } else {
        storyToSave.isOn = false
        return storageService.post(STORAGE_KEY, storyToSave)
    }
}

function createStory(model = '', type = '', batteryStatus = 100) {
    return {
        model,
        batteryStatus,
        type
    }
}

function _createStories() {
    let stories = utilService.loadFromStorage(STORAGE_KEY)
    if (!stories || !stories.length) {
        stories = [
            { _id: 'r2', model: 'Salad-O-Matic', batteryStatus: 80, type: 'Cooking' },
            { _id: 'r3', model: 'Dusty', batteryStatus: 100, type: 'Cleaning' },
            { _id: 'r1', model: 'Dominique Sote', batteryStatus: 100, type: 'Pleasure' },
            { _id: 'r4', model: 'DevTron', batteryStatus: 40, type: 'Office' }
        ]
        utilService.saveToStorage(STORAGE_KEY, stories)
    }
}

function getDefaultFilter() {
    return {};
  }

