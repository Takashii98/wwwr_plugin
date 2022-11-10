function downloadSettings() {
            //Array for different Values
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
               Throwable_weapon: localStorage.getItem("Throwable weapon"),
               Food: localStorage.getItem("Food"),
               Drink: localStorage.getItem("Drink"),
               Armor: localStorage.getItem("Armor"),
               Chest_rig: localStorage.getItem("Chest rig"),
               Meds: localStorage.getItem("Meds"),
               Backpack: localStorage.getItem("Backpack"),
               Headphones: localStorage.getItem("Headphones"),
               Common_container: localStorage.getItem("Common container"),
               Info: localStorage.getItem("Info"),
               Barter_item: localStorage.getItem("Barter item"),
               Key: localStorage.getItem("Key"),
               caches: localStorage.getItem("caches"),
               FilterQuests: localStorage.getItem("FilterQuests"),
               clr_alpha_slider: localStorage.getItem("clr-alpha-slider"),
               ItemScalingLinear: localStorage.getItem("ItemScalingLinear"),
               ItemScalingNone: localStorage.getItem("ItemScalingNone"),
               ItemScalingSqrt: localStorage.getItem("ItemScalingSqrt"),
               ExcludeBelow_Text: localStorage.getItem("ExcludeBelow-text"),
               IncludeAbove_Text: localStorage.getItem("IncludeAbove-text"),
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
