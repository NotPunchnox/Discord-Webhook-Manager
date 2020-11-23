function webhookspammmsg() {

  const snekfetch = require("snekfetch");
  commandIntervals = [];

  if (!document.getElementById("webhook1").value) return alert("Vous n'avez pas mis le webhook");
  if (!document.getElementById("message1").value) return alert("Vous n'avez pas mis de message à spammer");
  var webhook = document.getElementById("webhook1").value;
  var message1 = document.getElementById("message1").value;

  setInterval(function () {
    snekfetch.post(webhook).send({
      "content": message1
    }).end((err, res) => {
      console.log("message send")
    }, 500);
  });
  alert("Spammer de message en cours...")
}

function webhookspammembd() {

  const snekfetch = require("snekfetch");
  commandIntervals = [];

  if (!document.getElementById("webhook").value) return alert("Vous n'avez pas mis le webhook");
  if (!document.getElementById("message").value) return alert("Vous n'avez pas mis de message à spammer");
  var webhook = document.getElementById("webhook").value;
  var message1 = document.getElementById("message").value;
  var color = document.getElementById("color").value;
  var titre = document.getElementById("titre").value;

  setInterval(function () {
    snekfetch.post(webhook).send({
      "embeds": [{
        "title": titre,
        "description": message1,
        "color": color
      }]
    }).end((err, res) => {
      console.log(res.body)
    }, 500);
  });
  alert("Spammer embed en cours...")
}

function webhookdelete() {

  const snekfetch = require("snekfetch");

  if (!document.getElementById("webhook2").value) return alert("Vous n'avez pas mis le webhook");
  var webhook2 = document.getElementById("webhook2").value;
  snekfetch.delete(webhook2)
    .then(r => {
      if (r.status == 404) return alert("Webhook invalide");
      if (r.body.code == 10015) return alert("Webhook inexistant");
    })
  alert("webhook supprimé");
}

function wbsender2() {
  const snekfetch = require("snekfetch");
  if (!document.getElementById("webhook3").value) return alert("Vous n'avez pas mis le webhook");
  var webhook3 = document.getElementById("webhook3").value;
  if (!document.getElementById("message3").value) return alert("Vous n'avez pas mis de message à send");
  var message3 = document.getElementById("message3").value;
  var username3 = document.getElementById("username3").value;
  var avatar3 = document.getElementById("avatar3").value;
  snekfetch.post(webhook3).send({
    "content": message3,
    "username": username3,
    "avatar_url": avatar3
  }).end((err, res) => {
      console.log(res.body)
    })
    alert("Massage send avec succes")
  }

  function menu() {
    document.getElementById("menu").classList.remove("invisible");
    document.getElementById("menu").classList.add("visible");
    document.getElementById("wbembed").classList.remove("visible");
    document.getElementById("wbembed").classList.add("invisible");
    document.getElementById("wbspam").classList.remove("visible");
    document.getElementById("wbspam").classList.add("invisible");
    document.getElementById("deletewb").classList.remove("visible");
    document.getElementById("deletewb").classList.add("invisible");
    document.getElementById("senderwb").classList.remove("visible");
    document.getElementById("senderwb").classList.add("invisible");
  }

  function webhookspamm() {
    document.getElementById("wbembed").classList.remove("invisible");
    document.getElementById("wbembed").classList.add("visible");
    document.getElementById("menu").classList.remove("visible");
    document.getElementById("menu").classList.add("invisible");
    document.getElementById("wbspam").classList.remove("visible");
    document.getElementById("wbspam").classList.add("invisible");
    document.getElementById("deletewb").classList.remove("visible");
    document.getElementById("deletewb").classList.add("invisible");
    document.getElementById("senderwb").classList.remove("visible");
    document.getElementById("senderwb").classList.add("invisible");
  }

  function wbspam() {
    document.getElementById("wbembed").classList.remove("visible");
    document.getElementById("wbembed").classList.add("invisible");
    document.getElementById("menu").classList.remove("visible");
    document.getElementById("menu").classList.add("invisible");
    document.getElementById("wbspam").classList.remove("invisible");
    document.getElementById("wbspam").classList.add("visible");
    document.getElementById("deletewb").classList.remove("visible");
    document.getElementById("deletewb").classList.add("invisible");
    document.getElementById("senderwb").classList.remove("visible");
    document.getElementById("senderwb").classList.add("invisible");
  }

  function wbdel() {
    document.getElementById("wbembed").classList.remove("visible");
    document.getElementById("wbembed").classList.add("invisible");
    document.getElementById("menu").classList.remove("visible");
    document.getElementById("menu").classList.add("invisible");
    document.getElementById("deletewb").classList.remove("invisible");
    document.getElementById("deletewb").classList.add("visible");
    document.getElementById("wbspam").classList.remove("visible");
    document.getElementById("wbspam").classList.add("invisible");
    document.getElementById("senderwb").classList.remove("visible");
    document.getElementById("senderwb").classList.add("invisible");
  }

  function wbsender() {
    document.getElementById("wbembed").classList.remove("visible");
    document.getElementById("wbembed").classList.add("invisible");
    document.getElementById("menu").classList.remove("visible");
    document.getElementById("menu").classList.add("invisible");
    document.getElementById("deletewb").classList.remove("visible");
    document.getElementById("deletewb").classList.add("invisible");
    document.getElementById("wbspam").classList.remove("visible");
    document.getElementById("wbspam").classList.add("invisible");
    document.getElementById("senderwb").classList.remove("invisible");
    document.getElementById("senderwb").classList.add("visible");
  }
  //commandIntervals.forEach(interval => {
  //  clearInterval(interval);
  //});