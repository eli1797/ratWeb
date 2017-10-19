/* Rat Sighting "POJO"
* by Eli
*
*/
class Sighting {
    public address: string;
    public borough: string;
    public city: string;
    public state: string;
    public key: string;
    public latitude: string;
    public locationType: string;
    public longitude: string;
    public zip: string;
    public date: string;

    constructor(address:string, borough:string, city:string, state:string, key:string, 
        latitude:string, locationType:string, longitude:string, zip:string, date:string ) {
        this.address = address;
        this.borough = borough;
        this.city = city;
        this.state = state;
        this.key = key;
        this.latitude = latitude;
        this.locationType = locationType;
        this.longitude = longitude;
        this.zip = zip;
        this.date = date;
    }
}

