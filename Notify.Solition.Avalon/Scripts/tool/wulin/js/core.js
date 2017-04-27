var parentImagePath = "./wlssimg/";
var snNameArray = new Array();
var snObjectArray = new Array();
var s1 = "下一级别：";
var s2 = "<br/>学习条件：<br/>人物等级达到%d级<br/>上一职业阶段总技能等级达到%d级<br/>需要技能点数%d点";
var s3 = "<br/>学习条件：<br/>人物等级达到%d级<br/>	%s达到%d级<br/>	需要技能点数%d点";
var s4 = "<br/>学习条件：<br/>人物等级达到%d级<br/>需要技能点数1点";

var skillSpecNameArray = ["mana", "per", "plus", "reqLvl", "reqNum", "lastTime"];
var skillSpecValueArray = ["消耗真气", "加基础攻击", "加攻击", "人物等级达到", "需要技能点数", "持续：|持续时间："];

/**
 * 技能节点，每个SkillNode都是一个技能
 */
function SkillNode(){}
SkillNode.prototype = {
		marginLeft : 0,
		marginTop : 0,
		imagePath : "",
		name : "",
		level : 0,
		maxNum : 0,
		reqLvlArray : [],
		reqNum : 1,
		prevArray : [],
		nextArray : [],
		maxNum : 0,
		lastTime : "",
		data : new Object(),
		dataStr : new Object()
};

SkillNode.prototype.setLocation = function(x, y) {
	this.marginLeft = x;
	this.marginTop = y;
};
SkillNode.prototype.setImagePath = function(value) {
	this.imagePath = parentImagePath + value + ".png";
};
SkillNode.prototype.setName = function(value) {
	this.name = value;
	this.setImagePath(value);
	this.initSkillNodeData();
};
SkillNode.prototype.setLevel = function(value, boolean) {
	this.level = value;
	if (boolean) {
		if (this.level == 0) {
			for (var m = 0; m < this.nextArray.length; m++) {
				var nextSn = snObjectArray[snNameArray.indexOf(this.nextArray[m])];
				if (nextSn) {
					nextSn.setLevel(0, true);
				}
			}
		}
	}
};
SkillNode.prototype.initSkillNodeData = function() {
	this.data = eval(this.name);
	this.dataStr = eval(this.name+"_str");
	if (this.data.imgAlias != "") {
		this.setImagePath(this.data.imgAlias);
	}
	this.setLocation(this.data.x, this.data.y);
	
	if (this.data.lastTime != "") {
		this.lastTime = this.data.lastTime;
	}

	this.reqLvlArray = this.data.reqLvl.split(",");
	if (this.data.maxNum != "") {
		this.maxNum = this.data.maxNum;
	} else {
		this.maxNum = this.reqLvlArray.length;
	}
	
	if (this.reqLvlArray.length == 1 && this.reqLvlArray.length != this.maxNum) {
		this.reqLvlArray.push(1);
	}
	this.reqLvlArray = createAlgoArray(this.reqLvlArray, this.maxNum);
	
	this.reqNum = this.data.reqNum=="" ? 1 : parseInt(this.data.reqNum);
	
	this.prevArray = this.data.prev.split(",");
	
	if (this.data.next != "" && this.data.next != undefined) {
		this.nextArray = this.data.next.split(",");
	}
	
	if (this.data.reco != "") {
		this.level = parseInt(this.data.reco);
	}
};
SkillNode.prototype.showDesc = function() {
	var r = this.dataStr[0].replace(/\%s/, this.level+"");
	r += "<br/>";
	if (this.data.coolDown) {
		var naa = createAlgoArray(this.data.coolDown.split(","), this.maxNum);
		var index1 = r.indexOf("冷却时间");
		if (index1 != -1) {
			var reg = getReg(naa + "");
			
			r = r.substring(0, index1) + r.substring(index1).replace(reg, naa[this.level==0?0:(this.level-1)] + "");
		}
	}
	
	if (this.level != 0) {
		r += this.addDataToDescStrByLevel(this.dataStr[1], this.level);
	}
	r += "<br/>";
	
	if (this.level < this.maxNum) {
		/*if (this.level != 0) {
			r +=  "<br/>";
		}*/
		r += s1 + "<br/>";
		r += this.addDataToDescStrByLevel(this.dataStr[1], this.level+1);
	}
	r = r.replace(/\%\%/g, "%");
	
	if (this.level == 0) {
		if (this.prevArray[0] == "first") {
			if (this.prevArray[1] == "0") {
				r += s4.replace(/\%d/, this.reqLvlArray[this.level]);
			} else {
				r += s2.replace(/\%d/, this.reqLvlArray[0]).replace(/\%d/, this.prevArray[1]).replace(/\%d/, this.reqNum);
			}
		} else {
			r += s3.replace(/\%d/, this.reqLvlArray[this.level]).replace(/\%s/, this.prevArray[0]).replace(/\%d/, this.prevArray[1]).replace(/\%d/, this.reqNum);
		}
	} else if (this.level == this.maxNum) {
		//啥也不做
	} else {
		r += s4.replace(/\%d/, this.reqLvlArray[this.level]);
	}
	
	return r;
};
SkillNode.prototype.addDataToDescStrByLevel = function(str, lvl) {
	var r = str;
	for (var j = 0; j < skillSpecNameArray.length; j++) {
		var ele = skillSpecNameArray[j];
		if (this.data[ele] != "") {
			var n = createAlgoArray(this.data[ele].split(","), this.maxNum);
			
			var flagArray = skillSpecValueArray[j].split("|");
			for (var k = 0; k < flagArray.length; k++) {
				var index = r.indexOf(flagArray[k]);
				if (index != -1) {
					var reg = getReg(n + "");
					
					r = r.substring(0, index) + r.substring(index).replace(reg, n[lvl - 1] + "");
					break;
				}
			}
		}
	}
	
	var atta = this.data.atta;
	for (var k = 0; k < atta.length; k++) {
		var ie1 = atta[k];
		var m = createAlgoArray((ie1.algo+"").split(","), this.maxNum);
		var reg1 = getReg(m + "");
		var index1 = r.indexOf(ie1.desc+"");
		r = r.substring(0, index1) + r.substring(index1).replace(reg1, m[lvl - 1] + "");
	}
	
	return r;
};
function createAlgoArray(array, max) {
	if (array.length != max && array.length == 2) {
		var plusNum = parseFloat(array[1]);
		array.pop();
		for (var i = 1; i < max; i++) {
			array.push(parseFloat(array[0]) + i * plusNum);
		}
	}
	return array;
}
function getReg(str) {
	if (str.indexOf(".") != -1) {
		return /\%\.1f/;
	} else {
		return /\%d/;
	}
}

SkillNode.prototype.toString = function() {
	return "<div class='skillNode' id='"+this.name+"' style='margin-left:" +
			this.marginLeft+"px; margin-top:"+this.marginTop+"px; " +
			" background-image:url(\""+this.imagePath+"\"); '>" +
			"<div class='coverDiv'><br/>&nbsp;"+this.level+"</div>" +
			"</div>";
};

/**
 * 技能树，包含一个职业的所有技能
 */
function SkillTree() {}
SkillTree.prototype = {
		id : "",
		name : "",
		minCount : 0,
		skills : []
};
SkillTree.prototype.setValues = function(id, name, minCount, skills) {
	this.id = id;
	this.name = name;
	this.minCount = minCount;
	this.setSkills(skills);
};
SkillTree.prototype.setId = function(id) {
	this.id = id;
};
SkillTree.prototype.setName = function(name) {
	this.name = name;
};
SkillTree.prototype.setMinCount = function(minCount) {
	this.minCount = minCount;
};
SkillTree.prototype.setSkills = function(skills) {
	this.skills = skills;
};
SkillTree.prototype.isThree = false;
SkillTree.prototype.setIfThree = function(boolean) {
	this.isThree = boolean;
};

SkillTree.prototype.toString = function() {
	var s = "<div class='skillsTree' id='"+this.id+"' isThree='"+this.isThree+"' minCount='"+this.minCount+"'>";
	s += "<div class='skillsTreeTitleDiv'>";
	s += this.name + "<span class='totalNumSpanInSkillTree'>0</span></div>";
	
	for (var i = 0; i < this.skills.length; i++) {
		var sn = new SkillNode();
		sn.setName(this.skills[i]);
		snNameArray.push(sn.name);
		snObjectArray.push(sn);
		s += sn.toString();
	}
	s += "</div>";
	
	return s;
};
