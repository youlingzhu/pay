function returnInfo(data, nextPro) {
    if (data.value == "") {
        var str=data.caption.replace(/\s+/g,'')
        return "请填写" + str;
    } else {
        return nextPro();
    }
}


function Validation_Type() {



    // 注册号验证
    this.license_number_type = function (data) {
        var b = returnInfo(data, function(){
            var reg = /(^(?:(?![IOZSV])[\dA-Z]){2}\d{6}(?:(?![IOZSV])[\dA-Z]){10}$)|(^\d{15}$)/;
            var str = data.value;
            if (reg.test(data.value)) {
                return '';
            } else {
                strValue = '格式不正确，请正确填写营业执照上的18位统一社会信用代码或15位注册号';
                return strValue;
            }
        });
        console.log(b);
        return b;
    }



    // 商户名称验证
    this.merchant_name_type = function (data) {
        return returnInfo(data, function() {
            var reg = /^[\u4e00-\u9fa5\(\)()\da-zA-Z&]{2,50}$/gi;
            var str = data.value;
            var strValue = null;
            if (reg.test(str)) {
                return "";
            } else {
                strValue = '请填写正确的商户名称格式';
                return strValue;
            }
        })
    }


    // 个体户经营者/法人姓名验证
    this.legal_person_type = function (data) {
        return returnInfo(data, function(){
            var reg = /^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/;
            var str = data.value;
            var strValue = null;
            if (reg.test(str)) {
                return "";
            } else {
                strValue = '请填写正确的个体户经营者/法人名称';
                return strValue;
            }
        })
    }

   // 
    this.organization_code_type = function (data){
        return returnInfo(data,function(){
            var reg = /^[a-zA-Z0-9]{8}-[a-zA-Z0-9]$|[a-zA-Z0-9]{9}-[a-zA-Z0-9]$|^[a-zA-Z0-9]{10}-[a-zA-Z0-9]$/;
            var str= data.value;
            var strValue = null;
            if (reg.test(str)) {
                return "";
            } else {
                strValue = '格式不正确，请正确填写9位组织机构代码，如123456789-A';
                return strValue;
            }
        })
    }

    // 组织机构代码证 开始时间
    this.org_period_begin_type = function(data){
        return returnInfo(data, function(){
            var reg = /\d{4}-\d{2}-\d{2}/;
            var str = data.value;
            var strValue = null;
            if (reg.test(str)) {
                return "";
            } else {
                strValue = '请填写正确的日期格式';
                return strValue;
            }
        })
    }
    
    // 组织机构代码证 结束时间
    this.org_period_end_type = function(data){
        var datetimepicker1_input=document.getElementById('datetimepicker1_input');
        var values=dateToTimestamp(datetimepicker1_input.value);
 
        
        return returnInfo(data, function(){
            var reg = /\d{4}-\d{2}-\d{2}/;
            var str = data.value;
            var strValue = null;
            if ((dateToTimestamp(str)-values)<5184000000) {
                strValue = '请提供有效期在60天以上的证件，并如实填写有效期';
                return strValue;
            } else if(reg.test(str)){
                return "";
            }
            else {
                strValue = '请填写正确的日期格式';
                return strValue;
            }
        })
    }
     
    // 身份证姓名验证
    this.id_card_name_type=function(data){
        return returnInfo(data, function(){
            var reg = /^[\u4e00-\u9fa5]{2,4}$/;
            var str = data.value;
            var strValue = null;
            if (reg.test(str)) {
                return "";
            } else {
                strValue = '请上传法人的身份证件（即与营业执照上的经营者/法人姓名相同的身份证件）';
                return strValue;
            }
        }) 
    }



    // 身份证号码验证
    this.id_card_number_type=function(data){
        return returnInfo(data, function(){
            var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
            var str = data.value;
            var strValue = null;
            if (reg.test(str)) {
                return "";
            } else {
                strValue = '格式不正确，请正确填写身份证上的15或18位身份号码';
                return strValue;
            }
        }) 
    }

    // 身份证件有效期开始时间
    this.card_period_begin_type=function(data){
        return returnInfo(data, function(){
            var reg = /\d{4}-\d{2}-\d{2}/;
            var str = data.value;
            var strValue = null;
            console.log(str)
            if (reg.test(str)) {
                return "";
            } else {
                strValue = '请填写正确的日期格式';
                return strValue;
            }
        })
    }

    // 身份证件有效期结束时间
    this.card_period_end_type=function(data){
        var datetimepicker3=document.getElementById('datetimepicker3');
        var datetimepicker3_input=datetimepicker3.getElementsByTagName('input')[0];
        var values=dateToTimestamp(datetimepicker3_input.value);
        return returnInfo(data, function(){
            var reg = /\d{4}-\d{2}-\d{2}/;
            var str = data.value;
            var strValue = null;
            if ((dateToTimestamp(str)-values)<5184000000) {
                strValue = '请提供有效期在60天以上的证件，并如实填写有效期';
                return strValue;
            } else if(reg.test(str)){
                return "";
            }
            else {
                strValue = '请填写正确的日期格式';
                return strValue;
            }
        })
    }




    // 港澳台护照证件姓名验证
    this.id_doc_name_type=function(data){
        return returnInfo(data, function(){
            var str = data.value.trim();
            console.log(str.length);
            if (str.length>0) {
                return "";
            }else if(str.length==0){
                return "请填写证件号码"
            }
        })
    }
    

    // 港澳台护照证件姓名验证
    this.id_doc_number_type=function(data){
        return returnInfo(data, function(){
            var str = data.value.trim();
            console.log(str);
            if (str.length>0) {
                return "";
            }else if(str.length == 0){
                return "请填写证件持有人姓名";
            }
        })
    }


    // 证件有效期开始时间验证
    this.doc_period_begin_type=function(data){
        return returnInfo(data, function(){
            var reg = /\d{4}-\d{2}-\d{2}/;
            var str = data.value;
            var strValue = null;
            console.log(str)
            if (reg.test(str)) {
                return "";
            } else {
                strValue = '请填写正确的日期格式';
                return strValue;
            }
        })
    }

    // 证件有效期结束时间
    this.doc_period_end_type=function(data){
        var datetimepicker3=document.getElementById('datetimepicker5');
        var datetimepicker3_input=datetimepicker3.getElementsByTagName('input')[0];
        var values=dateToTimestamp(datetimepicker3_input.value);
        return returnInfo(data, function(){
            var reg = /\d{4}-\d{2}-\d{2}/;
            var str = data.value;
            var strValue = null;
            if ((dateToTimestamp(str)-values)<5184000000) {
                strValue = '请提供有效期在60天以上的证件，并如实填写有效期';
                return strValue;
            } else if(reg.test(str)){
                return "";
            }
            else {
                strValue = '请填写正确的日期格式';
                return strValue;
            }
        })
    }



   



}




function dateToTimestamp(dateStr) {
    if (!dateStr) {
        return ''
    }
    let newDataStr = dateStr.replace(/\.|\-/g, '/')
    let date = new Date(newDataStr);
    let timestamp = date.getTime();
    return timestamp
}