function downloadSettings() {
         //Array for differen Values
         const ValueList = [];

         //Checkbox Values
         var CenterPlayerValue = "false";
         var ShowFriendsValue = "false";
         var ShowExfilsValue = "false";
         var ItemHoverValue = "false";
         var QuestItemValue = "false";
         var UnmarketableItemValue = "false";
         var IncludeAboveValue = "false";
         var ExcludeBelowValue = "false";
         var IncludeAbove_textValue = "false";
         var ExcludeBelow_textValue = "false";
         var WeaponValue = "false";
         var Throwable_weaponValue = "false";
         var FoodValue = "false";
         var DrinkValue = "false";
         var ArmorValue = "false";
         var Chest_rigValue = "false";
         var MedsValue = "false";
         var BackpackValue = "false";
         var HeadphonesValue = "false";
         var Common_containerValue = "false";
         var InfoValue = "false";
         var Barter_itemValue = "false";
         var KeyValue = "false";
         var cachesValue = "false";
         var FilterQuestsValue = "false";

         //#region

         if (document.getElementById("CenterPlayer").checked == true) {
            CenterPlayerValue = "true";
         }

         if (document.getElementById("ShowFriends").checked == true) {
            ShowFriendsValue = "true";
         }

         if (document.getElementById("ShowExfils").checked == true) {
            ShowExfilsValue = "true";
         }
         if (document.getElementById("ItemHover").checked == true) {
            ItemHoverValue = "true";
         }
         if (document.getElementById("QuestItem").checked == true) {
            QuestItemValue = "true";
         }
         if (document.getElementById("UnmarketableItem").checked == true) {
            UnmarketableItemValue = "true";
         }
         if (document.getElementById("IncludeAbove").checked == true) {
            IncludeAboveValue = "true";
         }
         if (document.getElementById("ExcludeBelow").checked == true) {
            ExcludeBelowValue = "true";
         }
         if (document.getElementById("Weapon").checked == true) {
            WeaponValue = "true";
         }
         if (document.getElementById("Throwable weapon").checked == true) {
            Throwable_weaponValue = "true";
         }
         if (document.getElementById("Food").checked == true) {
            FoodValue = "true";
         }
         if (document.getElementById("Drink").checked == true) {
            DrinkValue = "true";
         }
         if (document.getElementById("Armor").checked == true) {
            ArmorValue = "true";
         }
         if (document.getElementById("Chest rig").checked == true) {
            Chest_rigValue = "true";
         }
         if (document.getElementById("Meds").checked == true) {
            MedsValue = "true";
         }
         if (document.getElementById("Backpack").checked == true) {
            BackpackValue = "true";
         }
         if (document.getElementById("Headphones").checked == true) {
            HeadphonesValue = "true";
         }
         if (document.getElementById("Common container").checked == true) {
            Common_containerValue = "true";
         }
         if (document.getElementById("Info").checked == true) {
            InfoValue = "true";
         }
         if (document.getElementById("Barter item").checked == true) {
            Barter_itemValue = "true";
         }
         if (document.getElementById("Key").checked == true) {
            KeyValue = "true";
         }
         if (document.getElementById("caches").checked == true) {
            cachesValue = "true";
         }
         if (document.getElementById("FilterQuests").checked == true) {
            FilterQuestsValue = "true";
         }

         //#endregion

         //Input Values

         var colorBelowValue;
         var colorSameValue;
         var colorAboveValue;
         var colorFriendValue;
         var ItemSizeValue;

         let obj = {
            CenterPlayer: CenterPlayerValue.toString(),
            ShowFriends: ShowFriendsValue.toString(),
            ShowExfils: ShowExfilsValue.toString(),
            ItemHover: ItemHoverValue.toString(),
            QuestItem: QuestItemValue.toString(),
            UnmarketableItem: UnmarketableItemValue.toString(),
            IncludeAbove: IncludeAboveValue.toString(),
            ExcludeBelow: ExcludeBelowValue.toString(),
            Weapon: WeaponValue.toString(),
            "Throwable weapon": Throwable_weaponValue.toString(),
            Food: FoodValue.toString(),
            Drink: DrinkValue.toString(),
            Armor: ArmorValue.toString(),
            "Chest rig": Chest_rigValue.toString(),
            Meds: MedsValue.toString(),
            Backpack: BackpackValue.toString(),
            Headphones: HeadphonesValue.toString(),
            "Common containe": Common_containerValue.toString(),
            Info: InfoValue.toString(),
            "Barter item": Barter_itemValue.toString(),
            Key: KeyValue.toString(),
            caches: cachesValue.toString(),
            FilterQuests: FilterQuestsValue.toString(),
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
