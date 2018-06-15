
function teams(){   
    $("#info").empty();
    $.ajax({
        headers: { 'X-Auth-Token': 'a15af96f0dc846f5a756fd7eea616120' },
        url:'http://api.football-data.org/v1/competitions/467/teams',
        dataType:"JSON",
        type:"GET",
        success: function (res){
            $.each(res.teams,function(i,item){     
                         $('#info').append("<div class='thumbnail'><img src="+res.teams[i].crestUrl+"></div>")                      
                         $('#info').append("<h3>"+res.teams[i].name+"</h3>")
            })    
        },
    })
}

function LeagueTable()
{
   var r=""
    console.log('table');
    $.ajax({
        headers: { 'X-Auth-Token': 'a15af96f0dc846f5a756fd7eea616120' },
        url:'http://api.football-data.org/v1/competitions/467/leagueTable',
        dataType:"JSON",
        type:"GET",    
        success:function(res)
        {
            console.log('team');
            $.each(res.standings.A,function(i,item){
                $('#tables').append("<th>"+res.standings.A[i].team+"</th>")
                $('#tables').append("<th>"+res.standings.A[i].points+"</th>")
                $('#tables').append("<th>"+res.standings.A[i].goals+"</th>")
                $('#tables').append("<th>"+res.standings.A[i].goalDifference+"</th>")
                $('#tables').append("<th>"+res.standings.A[i].goals+"</th>")
            })
            /*$.each(res.standings.B,function(i,item){
                $('#tables').append("<th>"+res.standings.B[i].team+"</th></br>")
                $('#tables').append("<th>"+res.standings.B[i].points+"</th>")
                $('#tables').append("<th>"+res.standings.B[i].goals+"</th>")
                $('#tables').append("<th>"+res.standings.B[i].goalDifference+"")
                $('#tables').append("<th>"+res.standings.B[i].goals+"</th>")
            })
            $.each(res.standings.C,function(i,item){
                $('#tables').append("<th>"+res.standings.C[i].team+"</th></br>")
                $('#tables').append("<th>"+res.standings.C[i].points+"</th>")
                $('#tables').append("<th>"+res.standings.C[i].goals+"</th>")
                $('#tables').append("<th>"+res.standings.C[i].goalDifference+"")
                $('#tables').append("<th>"+res.standings.C[i].goals+"</th>")
            })
            $.each(res.standings.D,function(i,item){
                $('#tables').append("<th>"+res.standings.D[i].team+"</th></br>")
                $('#tables').append("<th>"+res.standings.D[i].points+"</th>")
                $('#tables').append("<th>"+res.standings.D[i].goals+"</th>")
                $('#tables').append("<th>"+res.standings.D[i].goalDifference+"")
                $('#tables').append("<th>"+res.standings.D[i].goals+"</th>")
            })
            $.each(res.standings.E,function(i,item){
                $('#tables').append("<th>"+res.standings.E[i].team+"</th></br>")
                $('#tables').append("<th>"+res.standings.E[i].points+"</th>")
                $('#tables').append("<th>"+res.standings.E[i].goals+"</th>")
                $('#tables').append("<th>"+res.standings.E[i].goalDifference+"")
                $('#tables').append("<th>"+res.standings.E[i].goals+"</th>")
            })
            $.each(res.standings.F,function(i,item){
                $('#tables').append("<th>"+res.standings.F[i].team+"</th></br>")
                $('#tables').append("<th>"+res.standings.F[i].points+"</th>")
                $('#tables').append("<th>"+res.standings.F[i].goals+"</th>")
                $('#tables').append("<th>"+res.standings.F[i].goalDifference+"")
                $('#tables').append("<th>"+res.standings.F[i].goals+"</th>")
            })*/
        },
    })
}

function Fixture(){
    
    $.ajax({
        headers: { 'X-Auth-Token': 'a15af96f0dc846f5a756fd7eea616120' },
        url:'http://api.football-data.org/v1/competitions/467/fixtures',
        dataType:"JSON",
        type:"GET",
        success: function (res){
             //console.log("holaaa");
            $.each(res.fixtures,function(i,item){  
                console.log(res.fixtures[i]);   
                         $('#fix').append("<h4>"+res.fixtures[i].awayTeamName+"</h4>","vs","<h4>"+res.fixtures[i].homeTeamName+"</h4>")                      
            })    
        },
    })
}

function BuscarEquipo(){
    var equipo=teams();
   
    var team=$('#team').val()
    console.log(equipo);
    alert(team);
    for(var i=0;i<equipo.length;i++)
    {
        if(equipo[i].name==team)
        {
            alert(equipo[i].name);
            $('#equipo').append("<h3>"+equipo[i].name+"</h3>")
        }
    }
}

