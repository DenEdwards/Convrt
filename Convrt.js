(function(global, $){
    
    //Private variables
    var lengthUnits = ["nm","um","mm", "cm","m", "km", "mi","yd","ft","in","nmi"];

    var lengthFunctions = {
        e: function (a, base, power){
            return a*(base*Math.pow(10,power));
        }
    }

    // Returning a function constructor so that users don't have to use the new keyword every time.
    var Convrt = function (amount, currentUnit, ...args){
        return new Convrt.init(amount, currentUnit, ...args).validate().convert();
    }

    // All the methods for our Convrt object.
    Convrt.prototype = {
        // Console logs a string representation of the object;
        getInput: function(){
            if(console) console.log('Amount: ' + this.amount + ', Current Unit: ' + this.currentUnit+ ', Desired Unit: ' + this.args);
            return this;
        },
         // Validates that given units are supported
        validate: function(){
            var unitArr = [this.currentUnit];
            unitArr.push(...this.args);
            unitArr.forEach(unit => {
                if(lengthUnits.indexOf(unit) === -1) throw 'Error: Conversion to '+ unit +' is unsupported or invalid.';
            });
            if(this.amount < 0) throw 'Error: Amount cannot be '+ this.amount +', it must be a non-negative value.';
            return this;
        },
        // Convert from the base to unit to the desired units
        convert: function(){
            var wantedUnits = [...this.args];
            var cU = this.currentUnit;
            var convertedUnits = {};
            var a = this.amount;
            convertedUnits["original"] = {
                unit: cU,
                amount: a
            };
            wantedUnits.forEach(unit =>{
                var lengthMap = {

                    //Nanometer
                    nmtnm: a,
                    nmtum: a*0.001,
                    nmtmm: a*0.000001,
                    nmtcm: a*0.0000001,
                    nmtm: a*0.000000001,
                    nmtkm: a*0.000000000001,
                    nmtmi: lengthFunctions.e(a,6.2137,-13),
                    nmtyd: lengthFunctions.e(a,1.0936,-9),
                    nmtft: lengthFunctions.e(a,3.2808,-9),
                    nmtin: lengthFunctions.e(a,3.937,-8),
                    nmtnmi: lengthFunctions.e(a,5.3996,-13),
                    
                    //Micrometer
                    umtnm: a*1000,
                    umtum: a,
                    umtmm: a*0.001,
                    umtcm: a*0.0001,
                    umtm: lengthFunctions.e(a,1,-6),
                    umtkm: lengthFunctions.e(a,1,-9),
                    umtmi: lengthFunctions.e(a,6.2137,-10),
                    umtyd: lengthFunctions.e(a,1.0936,-6),
                    umtft: lengthFunctions.e(a,3.2808,-6),
                    umtin: lengthFunctions.e(a,3.937,-5),
                    umtnmi: lengthFunctions.e(a,5.3996,-10),

                    //Millimeter
                    mmtnm: lengthFunctions.e(a,1,6),
                    mmtum: a*1000,
                    mmtmm: a,
                    mmtcm: a*0.1,
                    mmtm: a*0.001,
                    mmtkm: lengthFunctions.e(a,1,-6),
                    mmtmi: lengthFunctions.e(a,6.2137,-7),
                    mmtyd: a*0.00109361,
                    mmtft: a*0.00328083,
                    mmtin: a*0.0393701,
                    mmtnmi: lengthFunctions.e(a,5.3996,-7),

                    //Centimeter
                    cmtnm: lengthFunctions.e(a,1,7),
                    cmtum: a*10000,
                    cmtmm: a*10,
                    cmtcm: a,
                    cmtm:  a*0.01,
                    cmtkm: lengthFunctions.e(a,1,-5),
                    cmtmi: lengthFunctions.e(a,6.2137,-6),
                    cmtyd: a*0.0109361,
                    cmtft: a*0.0328083,
                    cmtin: a*0.3936996,
                    cmtnmi: lengthFunctions.e(a,5.39955174946,-6),

                    //Meter
                    mtnm: lengthFunctions.e(a,1,9),
                    mtum: lengthFunctions.e(a,1,6),
                    mtmm: a*1000,
                    mtcm: a*100,
                    mtm: a,
                    mtkm: a*0.001,
                    mtmi: a*0.000621371,
                    mtyd: a*1.09361296,
                    mtft: a*3.28084,
                    mtin: a*39.3701,
                    mtnmi: a*0.000539957,

                    //Kilometer
                    kmtnm: lengthFunctions.e(a,1,12),
                    kmtum: lengthFunctions.e(a,1,9),
                    kmtmm: lengthFunctions.e(a,1,6),
                    kmtcm: a*100000,
                    kmtm: a*1000,
                    kmtkm: a,
                    kmtmi: a*0.621371,
                    kmtyd: a*1093.612959995625,
                    kmtft: a*3280.84,
                    kmtin: a*39370.1,
                    kmtnmi: a*0.539957,

                    //Mile
                    mitnm: lengthFunctions.e(a,1.609,12),
                    mitum: lengthFunctions.e(a,1.609,9),
                    mitmm: lengthFunctions.e(a,1.609,6),
                    mitcm: a*160934,
                    mitm: a*1609.34,
                    mitkm: a*1.60934,
                    mitmi: a,
                    mityd: a*1093.61,
                    mitft: a*3280.84,
                    mitin: a*39370.1,
                    mitnmi: a*0.868976,

                    //Yard
                    ydtnm: lengthFunctions.e(a,9.144,8),
                    ydtum: a*914400,
                    ydtmm: a*914.4,
                    ydtcm: a*91.44,
                    ydtm: a*0.9144,
                    ydtkm: a*0.0009144,
                    ydtmi: a*0.000568182,
                    ydtyd: a,
                    ydtft: a*3,
                    ydtin: a*36,
                    ydtnmi: a*0.000493737,
                    
                    //Foot
                    fttnm: lengthFunctions.e(a,3.048,8),
                    fttum: a*304800,
                    fttmm: a*304.8,
                    fttcm: a*30.48,
                    fttm: a*0.3048,
                    fttkm: a*0.0003048,
                    fttmi: a*0.000189394,
                    fttyd: a*0.333333,
                    fttft: a,
                    fttin: a*12,
                    fttnmi: a*0.000164579,

                    //Inch
                    intnm: lengthFunctions.e(a,2.54,7),
                    intum: a*25400,
                    intmm: a*25.4,
                    intcm: a*2.54,
                    intm: a*0.0254,
                    intkm: lengthFunctions.e(a,2.54,-5),
                    intmi: lengthFunctions.e(a,1.5783,-5),
                    intyd: a*0.0277778,
                    intft: a*0.0833334,
                    intin: a,
                    intnmi: lengthFunctions.e(a,1.3715,-5),

                    // Nautical Mile
                    nmitnm: lengthFunctions.e(a,1.852,12),
                    nmitum: lengthFunctions.e(a,1.852,9),
                    nmitmm: lengthFunctions.e(a,1.852,6),
                    nmitcm: a*185200,
                    nmitm: a*1852,
                    nmitkm: a*1.852,
                    nmitmi: a*1.15078,
                    nmityd: a*2025.37,
                    nmitft: a*6076.12,
                    nmitin: a*72913.4,
                    nmitnmi: a,
                }
                
                convertedUnits[unit] = parseFloat(lengthMap[cU+'t'+unit].toFixed(3));
            });
            
            return convertedUnits;
        }
    };

    //Convrt function constructor initialization.
    Convrt.init =  function (amount = 0, currentUnit = '', ...args){
        var self = this;
        self.amount = amount;
        self.currentUnit = currentUnit.trim();
        self.args = [];
        (function(){
            args.forEach((arg)=>{
                arg = arg.trim();
                self.args.push(arg);
            });
        }());
    }

    // Any object that is created with the Convrt.init function constructor will point to it for it's prototype so we make it point 
    // to our Convrt function's prototype where we'll store our methods.
    Convrt.init.prototype = Convrt.prototype;

    // Attach our object to the global window
    global.cnvr$ = global.Convrt = Convrt;

}(window, jQuery));