"use strict";

const profile = {
  username: "Jacob",
  playTime: 300,

  changeUsername(newName) {
    this.username = newName;
  },
  updatePlayTime(hours) {
    this.playtime += hours;
  },
  getInfo() {
    return `${this.username} has ${this.playTime} active hours!`;
  },
};

console.log(profile.getInfo()); // " Jacob'ın 300 aktif saati var!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // " Marco'nun 300 aktif saati var!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // " Marco'nun 320 aktif saati var!"
