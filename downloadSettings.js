function downloadSettings() {
            //Array for differen Values
            const ValueList = [];

            let obj = {
               CenterPlayer: localStorage.getItem("CenterPlayer"),
               ShowFriends: localStorage.getItem("ShowFriends"),
               ShowExfils: localStorage.getItem("ShowExfils"),
               ItemHover: localStorage.getItem("ItemHover"),
               QuestItem: localStorage.getItem("QuestItem"),
               UnmarketableItem: localStorage.getItem("UnmarketableItem"),
               IncludeAbove: localStorage.getItem("IncludeAbove"),
               ExcludeBelow: localStorage.getItem("ExcludeBelow"),
               Weapon: localStorage.getItem("Weapon"),
               "Throwable weapon": localStorage.getItem("Throwable weapon"),
               Food: localStorage.getItem("Food"),
               Drink: localStorage.getItem("Drink"),
               Armor: localStorage.getItem("Armor"),
               "Chest rig": localStorage.getItem("Chest rig"),
               Meds: localStorage.getItem("Meds"),
               Backpack: localStorage.getItem("Backpack"),
               Headphones: localStorage.getItem("Headphones"),
               "Common containe": localStorage.getItem("Common containe"),
               Info: localStorage.getItem("Info"),
               "Barter item": localStorage.getItem("Barter item"),
               Key: localStorage.getItem("Key"),
               caches: localStorage.getItem("caches"),
               FilterQuests: localStorage.getItem("FilterQuests"),
               "clr-alpha-slider": localStorage.getItem("clr-alpha-slider"),
               ItemScalingLinear: localStorage.getItem("clr-alpha-slider"),
               ItemScalingNone: localStorage.getItem("clr-alpha-slider"),
               ItemScalingSqrt: localStorage.getItem("clr-alpha-slider"),
               "ExcludeBelow-text": localStorage.getItem("clr-alpha-slider"),
               "IncludeAbove-text": localStorage.getItem("clr-alpha-slider"),
               
            };

            let JsonContent = "data:text/json;charset=utf-8,";

            var JsonToString = JSON.stringify(obj);
            JsonContent += JsonToString;
            var encodedUri = encodeURI(JsonContent);
            var link = document.createElement("a");
            link.setAttribute("href", encodedUri);
            link.setAttribute("download", "WingelwareSettings.json");
            document.body.appendChild(link);

            link.click();
         }
