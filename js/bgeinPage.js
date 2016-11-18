//全国省市联动				
//初始化城市
function changeProviceAndCity(proviceID, cityID, num) {
	var provs = ['安徽省', '澳门特别行政区', '北京市', '重庆市', '福建省', '甘肃省 ', '广东省', '广西自治区', '贵州省', '海南省', '河北省', '河南省', '黑龙江省', '湖北省', '湖南省', '吉林省', '江苏省', '江西省', '辽宁省', '内蒙古自治区', '宁夏自治区', '青海省', '山东省', '山西省', '陕西省', '上海市', '四川省', '台湾省', '天津市', '西藏自治区', '香港特别行政区', '新疆自治区', '云南省', '浙江省'];
	var cities = [
		['合肥', '芜湖', '蚌埠', '淮南', '马鞍山', '淮北', '铜陵', '安庆', '黄山', '滁州', '阜阳', '宿州', '巢湖', '六安', '亳州', '池州', '宣城'],
		['----'],
		['----'],
		['----'],
		['福州', '厦门', '莆田', '三明', '泉州', '漳州', '南平', '龙岩', '宁德'],
		["兰州", "嘉峪关", "金昌", "白银", "天水", "武威", "张掖", "平凉", "酒泉", "庆阳", "定西", "陇南", "临夏", "甘南"],
		['广州', '深圳', '珠海', '汕头', '韶关', '佛山', '江门', '湛江', '茂名', '肇庆', '惠州', '梅州', '汕尾', '河源', '阳江', '清远', '东莞', '中山', '潮州', '揭阳', '云浮'],
		['南宁', '柳州', '桂林', '梧州', '北海', '防城港', '钦州', '贵港', '玉林', '百色', '贺州', '河池', '来宾', '崇左'],
		['贵阳', "六盘水", "遵义", "安顺", "铜仁", "毕节", "黔西南", "黔东南", "黔南"],
		['海口', '三亚'],
		['石家庄', '唐山', '秦皇岛', '邯郸', '邢台', '保定', '张家口', '承德', '沧州', '廊坊', '衡水'],
		['郑州', '开封', '洛阳', '平顶山', '焦作', '鹤壁', '新乡', '安阳', '濮阳', '许昌', '漯河', '三门峡', '南阳', '商丘', '信阳', '周口', '驻马店'],
		['哈尔滨', '齐齐哈尔', '鸡西', '鹤岗', '双鸭山', '大庆', '伊春', '佳木斯', '七台河', '牡丹江', '黑河', '绥化', '大兴安岭'],
		['武汉', '黄石', '襄樊', '十堰', '荆州', '宜昌', '荆门', '鄂州', '孝感', '咸宁', '随州', '恩施'],
		['长沙', '株洲', '湘潭', '衡阳', '邵阳', '岳阳', '常德', '张家界', '益阳', '郴州', '永州', '怀化', '娄底', '湘西'],
		['长春', '吉林', '四平', '辽源', '通化', '白山', '松原', '白城', '延边'],
		['南京', '无锡', '徐州', '常州', '苏州', '南通', '连云港', '淮安', '盐城', '扬州', '镇江', '泰州', '宿迁'],
		['南昌', '景德镇', '萍乡', '九江', '新余', '鹰潭', '赣州', '吉安', '宜春', '抚州', '上饶'],
		['沈阳', '大连', '鞍山', '抚顺', '本溪', '丹东', '锦州', '营口', '阜新', '辽阳', '盘锦', '铁岭', '朝阳', '葫芦岛'],
		['呼和浩特', '包头', '乌海', '赤峰', '通辽', '鄂尔多斯', '呼伦贝尔', '巴彦淖尔', '乌兰察布', '兴安', '锡林郭勒', '阿拉善'],
		['银川', '石嘴山', '吴忠', '固原', '中卫'],
		["西宁", "海东", "海北", "黄南", "海南", "果洛", "玉树", "海西"],
		['济南', '青岛', '淄博', '枣庄', '东营', '烟台', '潍坊', '威海', '济宁', '泰安', '日照', '莱芜', '临沂', '德州', '聊城', '滨州', '菏泽'],
		['太原', '大同', '阳泉', '长治', '晋城', '朔州', '晋中', '运城', '忻州', '临汾', '吕梁'],
		['西安', '铜川', '宝鸡', '咸阳', '渭南', '延安', '汉中', '榆林', '安康', '商洛'],
		['----'],
		['成都', '自贡', '攀枝花', '泸州', '德阳', '绵阳', '广元', '遂宁', '内江', '乐山', '南充', '宜宾', '广安', '达州', '眉山', '雅安', '巴中', '资阳', '阿坝', '甘孜', '凉山'],
		["台北", "高雄", "基隆", "台中", "台南", "新竹", "嘉义"],
		['----'],
		["拉萨", "昌都", "山南", "日喀则", "那曲", "阿里", "林芝"],
		['----'],
		['乌鲁木齐', "克拉玛依", "吐鲁番", "哈密", "和田", "阿克苏", "喀什", "克孜勒苏柯尔克孜", "巴音郭楞蒙古", "昌吉", "博尔塔拉蒙古", "伊犁哈萨克", "塔城", "阿勒泰"],
		['昆明', '曲靖', '玉溪', "保山", "昭通", "丽江", "普洱", "临沧", "文山", "红河", "西双版纳", "楚雄", "大理", "德宏", "怒江", "迪庆"],
		['杭州', '宁波', '温州', '嘉兴', '湖州', '绍兴', '金华', '衢州', '舟山', '台州', '丽水'],
	];
	var proviceID1 = proviceID;
	var cityID1 = cityID;
	var proviceID2 = document.getElementById(proviceID1);
	var cityID2 = document.getElementById(cityID1);
	var begindex = num;
	//初始化下拉菜单
	function initSel() {
		//初始化省份
		for (var i = 0; i < provs.length; i++) {
			var pOpt = new Option(provs[i], "");
			proviceID2.options.add(pOpt);
		}
		//初始化城市
		for (var i = 0; i < cities[0].length; i++) {
			var cOpt = new Option(cities[0][i], "");
			cityID2.options.add(cOpt);
		}
	}
	//更新城市列表 
	function updateCities() {
		var index = proviceID2.selectedIndex;
		//清空原有城市 
		cityID2.options.length = 0;
		//更新城市列表 
		for (var i = 0; i < cities[index].length; i++) {
			var cOpt = new Option(cities[index][i], "");
			cityID2.options.add(cOpt);
		}
	}
	if (num == 0) {
		initSel();
	} else {
		updateCities();
	}
}

//图片的缩放
function sizeBigImg() {
	var Beginw = 0;
	var Beginwh = 0;
	var arrImg = document.getElementsByClassName("vip_data_img");
	var arrSuccess = document.getElementsByClassName("succeed_img");
	for (var i = 0; i < arrImg.length; i++) {
		arrImg[i].onmouseover = function() {
			changeSize(this);
		}
		arrImg[i].onmouseout = function() {
			returnchangeSize(this);
		}
		arrImg[i].onclick = function() {
			openShowImg(this);
		}
	}
	for (var j = 0; j < arrSuccess.length; j++) {
		arrSuccess[j].onclick = function() {
			openShowImg(this);
		}
	}

	function changeSize(obj) {
		Beginw = obj.width;
		Beginh = obj.height;
		var changew = (obj.width * 1.2);
		var changeh = (obj.height * 1.2);
		obj.style.width = changew + "px";
		obj.style.height = changeh + "px";
	}

	function returnchangeSize(obj) {
		//alert(obj.style.width); 
		var w = Beginw;
		var h = Beginh;
		obj.style.width = w + "px";
		obj.style.height = h + "px";
	}
}

//换图按钮的改变
//function changeImg(ImgtopId) {
//	var img_A_arr = document.getElementById(ImgtopId).getElementsByTagName("a");
//	for (var i = 0; i < img_A_arr.length; i++) {
//		img_A_arr[i].onclick = function() {
//			changBgcolor(this);
//		}
//	}
//
//	function changBgcolor(obj) {
//		var img_A_arr = document.getElementById(ImgtopId).getElementsByTagName("a");
//		for (var i = 0; i < img_A_arr.length; i++) {
//			img_A_arr[i].style.backgroundColor = "#219dc0";
//		}
//		obj.style.backgroundColor = "#26BDE7";
//	}
//}

//改变best_user_img
function bestImgChg(ImgtopId,obj,select_name,num) {
//	var k=select_name;
//	alert(k);
	var arrImg = document.getElementsByClassName("vip_data_img");
	var arrSuccess = document.getElementsByClassName("succeed_img");
	if (num==1) {
		for (var i = 0; i <arrImg.length; i++) {
		arrImg[i].src = "img/best_img_" + select_name + "/" + (i+1) + ".jpg";
	  }
	} else if(num==2){
		for (var j=0;j<arrSuccess.length;j++) {
		arrSuccess[j].src="img/successImg_"+ select_name +"/"+(j+1)+".jpg";
	  }
	}
	
	
	
   var img_A_arr = document.getElementById(ImgtopId).getElementsByTagName("a");
	for (var i = 0; i < img_A_arr.length; i++) {
			img_A_arr[i].style.backgroundColor = "#219dc0";
	}
		obj.style.backgroundColor = "#26BDE7";
	
}

//关闭图片展示
function closeShowImg() {
	var showImg_Bgc = document.getElementById("showImg_Bgc");
	var showImg = document.getElementById("showImg");
	showImg_Bgc.style.display = "none";
	showImg.style.display = "none";
}
//开启图片展示
function openShowImg(obj) {
	var showImg_Bgc = document.getElementById("showImg_Bgc");
	var showImg = document.getElementById("showImg");
	var peoplehead_img = document.getElementById("peoplehead_img");
	showImg_Bgc.style.display = "block";
	showImg.style.display = "block";
	peoplehead_img.style.backgroundImage = "url(" + obj.src + ")";
}