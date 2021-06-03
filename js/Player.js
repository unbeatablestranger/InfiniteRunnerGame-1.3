class Player
{
  constructor()
  {
    this.index = null;
    this.name = null;
    this.distance = 0;
  }

  getCount()
  {
    var contestantCountRef = database.ref('contestantCount');
    contestantCountRef.on("value",function(data){
      contestantCount = data.val();
    })
  }

  updateCount(count)
  {
    database.ref('/').update({
      contestantCount: count
    });
  }

  update()
  {
    var contestantIndex = "contestants/contestant" + this.index;
    database.ref(contestantIndex).set({
      name: this.name,
      distance: this.distance,
    });
  }

  static getPlayerInfo()
  {
    var contestantInfoRef = database.ref('contestants');
    contestantInfoRef.on("value",(data)=>{
      allContestants = data.val();
    })
  }
}
