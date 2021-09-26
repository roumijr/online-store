import{makeAutoObservable} from 'mobx'


export default class DeviceStore{
    constructor() {
        this._types = [
            { id: 1, name: 'холодильники' },
            {id: 2, name: 'Смартфоны'},
        ]
        this._brands = [
            { id: 1, name: 'sumsung' },
            {id: 2, name: 'apple'},
        ]
        this._devices = [
            { id: 1, name: 'iphone 12 pro', price: 25000, rating: 5, img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwincar.ie%2Fwp-content%2Fuploads%2F2020%2F10%2FIPHONE12.jpg&f=1&nofb=1' },
            { id: 2, name: 'iphone 12 pro', price: 25000, rating: 5, img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwincar.ie%2Fwp-content%2Fuploads%2F2020%2F10%2FIPHONE12.jpg&f=1&nofb=1' },
            { id: 3, name: 'iphone 12 pro', price: 25000, rating: 5, img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwincar.ie%2Fwp-content%2Fuploads%2F2020%2F10%2FIPHONE12.jpg&f=1&nofb=1' },
            { id: 4, name: 'iphone 12 pro', price: 25000, rating: 5, img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwincar.ie%2Fwp-content%2Fuploads%2F2020%2F10%2FIPHONE12.jpg&f=1&nofb=1' },
            
        ]
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    setBrands(brands) {
        this._brands = brands
    }

    setDevices(devices) {
        this._devices = devices
    }

    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }

    get devices() {
        return this._devices
    }
}