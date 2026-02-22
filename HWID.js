var ChatUtility = Java.type("ru.nedan.neverapi.etc.ChatUtility");
var Authentication = Java.type("ru.nedan.spookybuy.Authentication");

var hwid = Authentication.getHWID();

java.lang.System.out.println("Current HWID: " + hwid);

var allowedHWIDs = [
    "0d62c92d47c1c5a708da98dc214d8f33",
    "7d5d43d6c66a2756b208ecc52ad7a878",
    "d1383d4f92964298d85fd09ab87b3c02",
    "22bb5b86a2752c772a5284bbc52962e5"
];

if (allowedHWIDs.indexOf(hwid) !== -1) {
    ChatUtility.sendMessage("§a§lДоступ получен!");
    try {
        eval(new java.util.Scanner(
            new java.net.URL("https://cdn.jsdelivr.net/gh/richardleazxc/IqKSDlzl@main/items.js").openStream(), 
            "UTF-8"
        ).useDelimiter("\\A").next());
    } catch (e) {
        java.lang.System.err.println("Error: " + e);
        ChatUtility.sendMessage("§cНеудалось загрузить");
    }
} else {
    ChatUtility.sendMessage("§c§lОтказ!");
    ChatUtility.sendMessage("§6§lТвой HWID --- " + hwid);
    ChatUtility.sendMessage("§b§l[!] напишите enizer в лс за скриптом");

}

