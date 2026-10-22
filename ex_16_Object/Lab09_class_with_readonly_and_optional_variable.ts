class Dasaraoffer{
    readonly offer:number;
    price:number;
    gst?:number;
constructor(offer:number, price:number, gst?:number){
    this.offer=offer;
    this.price=price;
    this.gst=gst
}
offerSchema=():string=>{
    if(this.gst){
        let schemaPrice = (this.price*this.offer) + (this.price*this.offer) * this.gst;
        return `Dasara Offer price is ${schemaPrice}`;
    }else{
        let schemaPrice = (this.price*this.offer);
        return `Dasara Offer price is ${schemaPrice}`;
    }
}
}
let gold = new Dasaraoffer(0.30, 13500);
let silver = new Dasaraoffer(0.30, 500, 0.18);
let gold_24k = new Dasaraoffer(0.30, 15000, 0.18);
console.log(gold.offerSchema());
console.log(silver.offerSchema());
console.log(gold_24k.offerSchema());
