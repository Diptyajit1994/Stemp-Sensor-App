



function getAccResult(mydata){
	
	

var accelaration_data = mydata;
console.log(accelaration_data);
function read_data(accelaration_data){
	var accelaration_x = new Array()
	var accelaration_y = new Array()
	var accelaration_z = new Array()
	var time_obs = new Array()
	for(var x in accelaration_data){
		var item = accelaration_data[x]
		console.log(item)
		var time = new Date(item[0])
		var x= item[1]
		var y= item[2]
		var z= item[3]
    	accelaration_x.push(x)
    	accelaration_y.push(y)
    	accelaration_z.push(z)
    	time_obs.push(time)
		//document.write("Times: "+time+ " X: "+x+" Y:"+y+" Z:"+z+"<br>" )
	}
	return [accelaration_x, accelaration_y, accelaration_z, time_obs]
}

var acctime = read_data(accelaration_data);
console.log(acctime);
accelaration_x = acctime[0];
accelaration_y = acctime[1];
accelaration_z = acctime[2];
time_obs = acctime[3];

var acc_size = accelaration_x.length;
var time_size = time_obs.length;
//document.write("data Size: "+acc_size+ " Time Ins Size: "+time_size+"<br>");

function velocity(accelaration, time_instant) {
	var v = 0;
	if(time_instant > accelaration.length-1){
    	time_instant = accelaration.length-1;
    }
    var count = 1;
    while(count < time_instant){
        var time_diff = (time_obs[count]-time_obs[count-1])/1000;
        //document.write("Interval "+count+" = ",time_diff+"<br>");
    	v += time_diff*accelaration[count-1];
        count ++;
    }
    return v;
}

time_ins = 4;
var velocity_x = velocity(accelaration_x, time_ins);
var velocity_y = velocity(accelaration_y, time_ins);
var velocity_z = velocity(accelaration_z, time_ins);
//document.write("Velocity in X = ",+velocity_x+"<br>")
//document.write("Velocity in Y = ",+velocity_y+"<br>")
//document.write("Velocity in Z = ",+velocity_z+"<br>")

function absolute_velocity(time_instant){
	var velocity_x = velocity(accelaration_x, time_instant);
  	var velocity_y = velocity(accelaration_y, time_instant);
  	var velocity_z = velocity(accelaration_z, time_instant);
  	return Math.sqrt(Math.pow(velocity_x,2) + Math.pow(velocity_y,2) + Math.pow(velocity_z,2));
}

var abs_vel = absolute_velocity(time_ins);
//document.write("Absolute Velocity = ",+abs_vel+"<br>")

function distance(accelaration, time_instant) {
    var vel=0;
    var s=0;
    
    if(time_instant > accelaration.length-1){
    	time_instant = accelaration.length-1;
    }
    
    var count = 1;
    while(count < time_instant+1){
    	//document.write(time_obs[count]+" "+time_obs[count+1]+"<br>")
        vel = velocity(accelaration, count);
        var time_diff = (time_obs[count]-time_obs[count-1])/1000;
    	s += time_diff*vel ;
        count ++;
    }
    
    return s;
}

time_ins = 4;
var dist_x = distance(accelaration_x, time_ins);
var dist_y = distance(accelaration_y, time_ins);
var dist_z = distance(accelaration_z, time_ins);
//document.write("Distance in X = ",+dist_x+"<br>")
//document.write("Distance in Y = ",+dist_y+"<br>")
//document.write("Distance in Z = ",+dist_z+"<br>")

function absolute_distance(time_instant){
	var dist_x = distance(accelaration_x, time_ins);
	var dist_y = distance(accelaration_y, time_ins);
	var dist_z = distance(accelaration_z, time_ins);
  	return Math.sqrt(Math.pow(dist_x,2) + Math.pow(dist_y,2) + Math.pow(dist_z,2));
}

function avg_velocity(time_instant){
  dist = absolute_distance(time_instant);
  total_time = (time_obs[time_instant] - time_obs[0])/1000;
  return (dist/total_time);
}

var abs_dist = absolute_distance(time_ins);
var avg_vel = avg_velocity(time_ins);
//document.write("Absolute Distance = ",+abs_dist+"<br>")
//document.write("Average Velocity = ",+avg_vel+"<br>")
	return abs_dist;
}
function getAbVelResult(mydata){
	
	

var accelaration_data = mydata;
console.log(accelaration_data);
function read_data(accelaration_data){
	var accelaration_x = new Array()
	var accelaration_y = new Array()
	var accelaration_z = new Array()
	var time_obs = new Array()
	for(var x in accelaration_data){
		var item = accelaration_data[x]
		console.log(item)
		var time = new Date(item[0])
		var x= item[1]
		var y= item[2]
		var z= item[3]
    	accelaration_x.push(x)
    	accelaration_y.push(y)
    	accelaration_z.push(z)
    	time_obs.push(time)
		//document.write("Times: "+time+ " X: "+x+" Y:"+y+" Z:"+z+"<br>" )
	}
	return [accelaration_x, accelaration_y, accelaration_z, time_obs]
}

var acctime = read_data(accelaration_data);
console.log(acctime);
accelaration_x = acctime[0];
accelaration_y = acctime[1];
accelaration_z = acctime[2];
time_obs = acctime[3];

var acc_size = accelaration_x.length;
var time_size = time_obs.length;
//document.write("data Size: "+acc_size+ " Time Ins Size: "+time_size+"<br>");

function velocity(accelaration, time_instant) {
	var v = 0;
	if(time_instant > accelaration.length-1){
    	time_instant = accelaration.length-1;
    }
    var count = 1;
    while(count < time_instant){
        var time_diff = (time_obs[count]-time_obs[count-1])/1000;
        //document.write("Interval "+count+" = ",time_diff+"<br>");
    	v += time_diff*accelaration[count-1];
        count ++;
    }
    return v;
}

time_ins = 4;
var velocity_x = velocity(accelaration_x, time_ins);
var velocity_y = velocity(accelaration_y, time_ins);
var velocity_z = velocity(accelaration_z, time_ins);
//document.write("Velocity in X = ",+velocity_x+"<br>")
//document.write("Velocity in Y = ",+velocity_y+"<br>")
//document.write("Velocity in Z = ",+velocity_z+"<br>")

function absolute_velocity(time_instant){
	var velocity_x = velocity(accelaration_x, time_instant);
  	var velocity_y = velocity(accelaration_y, time_instant);
  	var velocity_z = velocity(accelaration_z, time_instant);
  	return Math.sqrt(Math.pow(velocity_x,2) + Math.pow(velocity_y,2) + Math.pow(velocity_z,2));
}

var abs_vel = absolute_velocity(time_ins);
//document.write("Absolute Velocity = ",+abs_vel+"<br>")

function distance(accelaration, time_instant) {
    var vel=0;
    var s=0;
    
    if(time_instant > accelaration.length-1){
    	time_instant = accelaration.length-1;
    }
    
    var count = 1;
    while(count < time_instant+1){
    	//document.write(time_obs[count]+" "+time_obs[count+1]+"<br>")
        vel = velocity(accelaration, count);
        var time_diff = (time_obs[count]-time_obs[count-1])/1000;
    	s += time_diff*vel ;
        count ++;
    }
    
    return s;
}

time_ins = 4;
var dist_x = distance(accelaration_x, time_ins);
var dist_y = distance(accelaration_y, time_ins);
var dist_z = distance(accelaration_z, time_ins);
//document.write("Distance in X = ",+dist_x+"<br>")
//document.write("Distance in Y = ",+dist_y+"<br>")
//document.write("Distance in Z = ",+dist_z+"<br>")

function absolute_distance(time_instant){
	var dist_x = distance(accelaration_x, time_ins);
	var dist_y = distance(accelaration_y, time_ins);
	var dist_z = distance(accelaration_z, time_ins);
  	return Math.sqrt(Math.pow(dist_x,2) + Math.pow(dist_y,2) + Math.pow(dist_z,2));
}

function avg_velocity(time_instant){
  dist = absolute_distance(time_instant);
  total_time = (time_obs[time_instant] - time_obs[0])/1000;
  return (dist/total_time);
}

var abs_dist = absolute_distance(time_ins);
var avg_vel = avg_velocity(time_ins);
//document.write("Absolute Distance = ",+abs_dist+"<br>")
//document.write("Average Velocity = ",+avg_vel+"<br>")
	return abs_vel;
}
function getAvgVelResult(mydata){
	
	

var accelaration_data = mydata;
console.log(accelaration_data);
function read_data(accelaration_data){
	var accelaration_x = new Array()
	var accelaration_y = new Array()
	var accelaration_z = new Array()
	var time_obs = new Array()
	for(var x in accelaration_data){
		var item = accelaration_data[x]
		console.log(item)
		var time = new Date(item[0])
		var x= item[1]
		var y= item[2]
		var z= item[3]
    	accelaration_x.push(x)
    	accelaration_y.push(y)
    	accelaration_z.push(z)
    	time_obs.push(time)
		//document.write("Times: "+time+ " X: "+x+" Y:"+y+" Z:"+z+"<br>" )
	}
	return [accelaration_x, accelaration_y, accelaration_z, time_obs]
}

var acctime = read_data(accelaration_data);
console.log(acctime);
accelaration_x = acctime[0];
accelaration_y = acctime[1];
accelaration_z = acctime[2];
time_obs = acctime[3];

var acc_size = accelaration_x.length;
var time_size = time_obs.length;
//document.write("data Size: "+acc_size+ " Time Ins Size: "+time_size+"<br>");

function velocity(accelaration, time_instant) {
	var v = 0;
	if(time_instant > accelaration.length-1){
    	time_instant = accelaration.length-1;
    }
    var count = 1;
    while(count < time_instant){
        var time_diff = (time_obs[count]-time_obs[count-1])/1000;
        //document.write("Interval "+count+" = ",time_diff+"<br>");
    	v += time_diff*accelaration[count-1];
        count ++;
    }
    return v;
}

time_ins = 4;
var velocity_x = velocity(accelaration_x, time_ins);
var velocity_y = velocity(accelaration_y, time_ins);
var velocity_z = velocity(accelaration_z, time_ins);
//document.write("Velocity in X = ",+velocity_x+"<br>")
//document.write("Velocity in Y = ",+velocity_y+"<br>")
//document.write("Velocity in Z = ",+velocity_z+"<br>")

function absolute_velocity(time_instant){
	var velocity_x = velocity(accelaration_x, time_instant);
  	var velocity_y = velocity(accelaration_y, time_instant);
  	var velocity_z = velocity(accelaration_z, time_instant);
  	return Math.sqrt(Math.pow(velocity_x,2) + Math.pow(velocity_y,2) + Math.pow(velocity_z,2));
}

var abs_vel = absolute_velocity(time_ins);
//document.write("Absolute Velocity = ",+abs_vel+"<br>")

function distance(accelaration, time_instant) {
    var vel=0;
    var s=0;
    
    if(time_instant > accelaration.length-1){
    	time_instant = accelaration.length-1;
    }
    
    var count = 1;
    while(count < time_instant+1){
    	//document.write(time_obs[count]+" "+time_obs[count+1]+"<br>")
        vel = velocity(accelaration, count);
        var time_diff = (time_obs[count]-time_obs[count-1])/1000;
    	s += time_diff*vel ;
        count ++;
    }
    
    return s;
}

time_ins = 4;
var dist_x = distance(accelaration_x, time_ins);
var dist_y = distance(accelaration_y, time_ins);
var dist_z = distance(accelaration_z, time_ins);
//document.write("Distance in X = ",+dist_x+"<br>")
//document.write("Distance in Y = ",+dist_y+"<br>")
//document.write("Distance in Z = ",+dist_z+"<br>")

function absolute_distance(time_instant){
	var dist_x = distance(accelaration_x, time_ins);
	var dist_y = distance(accelaration_y, time_ins);
	var dist_z = distance(accelaration_z, time_ins);
  	return Math.sqrt(Math.pow(dist_x,2) + Math.pow(dist_y,2) + Math.pow(dist_z,2));
}

function avg_velocity(time_instant){
  dist = absolute_distance(time_instant);
  total_time = (time_obs[time_instant] - time_obs[0])/1000;
  return (dist/total_time);
}

var abs_dist = absolute_distance(time_ins);
var avg_vel = avg_velocity(time_ins);
//document.write("Absolute Distance = ",+abs_dist+"<br>")
//document.write("Average Velocity = ",+avg_vel+"<br>")
	return avg_vel;
}



