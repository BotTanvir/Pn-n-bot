module.exports.config = {
 name: "antiout",
 eventType: ["log:unsubscribe"],
 version: "0.0.1",
 credits: "DungUwU",
 description: "Listen events Notify bot or group member with random gif/photo/video"
};

module.exports.run = async({ event, api, Threads, Users }) => {
 let data = (await Threads.getData(event.threadID)).data || {};
 if (data.antiout == false) return;
 if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
 const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
 const type = (event.author == event.logMessageData.leftParticipantFbId) ? "self-separation" : "being kicked by the administrator";
 if (type == "self-separation") {
  api.addUserToGroup(event.logMessageData.leftParticipantFbId, event.threadID, (error, info) => {
   if (error) {
    api.sendMessage(`-♦𝐒𝐨𝐫𝐫𝐲 𝐁𝐎𝐒𝐒 ${name} ব্লক করছে তাই এড করতে পারলাম না😞😞  \n✢━━━━━━━━━━━━━━━✢\n ----❖------♦𝐓𝐀𝐍𝐕𝐈𝐑 𝐁𝐎𝐓♦------❖----:( `, event.threadID)
   } else api.sendMessage(`𝐁𝐎𝐒𝐒, ${name} 𝐋𝐞𝐚𝐯𝐞 নেওয়া আইডি টা 𝐀𝐠𝐚𝐢𝐧 এড করতে সফল্য-😁 \n✢━━━━━━━━━━━━━━━✢\n ----❖------♦𝐓𝐀𝐍𝐕𝐈𝐑 𝐁𝐎𝐓♦------❖----`,

 event.threadID);
  })
 }
                     }
