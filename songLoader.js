 var copyright = `© Sala Cristiana Managua  &nbsp&nbsp| &nbsp&nbsp `;
 var index ='';
 songs.forEach(function(song){
		    var tag = document.getElementById(song.id);
		    
		    var home = '<div class="home"><a href="#index"><img src="hymns-image/home.png"></a></div>';
		    var html = home;
		    index = index+`<div><a href="#${song.id}">${song.name}</a></div>`;
		    //tag.innerHTML = song.html;
		    song.verses.forEach( function(verse, idx){
		      var footer = '';
		      if(idx>0){
		        footer = `<footer>${copyright}${song.name}</footer>`;
		      }
		      html = html+`<section>${verse}${footer}</section>`
		    });
		    
		    tag.innerHTML = html;
		  });
	var tag = document.getElementById('index');
	tag.innerHTML = index;