let moneyRule=(needs:number, wants:number, invest:number = 0.20):void => {
    let salary = 70000;
    let houseUsage=salary*needs;
    let enjoyUsage=salary*wants;
    let investUsage=salary*invest;
    console.log(`I will be using ${houseUsage} for Grocery purpose`);
    console.log(`I will be using ${enjoyUsage} for Entertainment purpose`);
    console.log(`I will be using ${investUsage} for Investment purpose`);
}

moneyRule(0.50, 0.30);

//Note: Default functionality will not work for first parameter individually, So we need to make all are default