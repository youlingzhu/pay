function Component_list() {

    var application_list_one = document.getElementById('application_list_one');
    // 选择经营者类型
    this.subjectType = function (data, componentNextPro) {
       
        var arr = [{
                caption: '企业',
                title: "营业执照上的主体类型一般为有限公司、有限责任公<br />司",
                value: "SUBJECT_TYPE_ENTERPRISE"
            },
            {
                caption: '党政、机关及事业单位',
                title: "包括国内各级、各类政府机构、事业单位 等。如：公<br />安、党团、司法、交通、旅游 工商税务、市政、医疗、教育、学校等机构",
                value: "SUBJECT_TYPE_INSTITUTIONS"
            },
            {
                caption: '个体工商户',
                title: "营业执照上的主体类型一般为个体户、个体工商户、<br />个体经营",
                value: "SUBJECT_TYPE_INDIVIDUAL"
            },
            {
                caption: '其他组织',
                title: "不属于企业、政府事业单位的组织机构，如社会团<br />体、民办丰企业、基金会。要求机构 已か理组织机构<br />代码证",
                value: "SUBJECT_TYPE_OTHERS"
            }
        ]

        var div = document.createElement("div");
        div.setAttribute('class', 'authorized_application');
        var h3 = document.createElement('h3');
        var ul = document.createElement('ul');
        ul.setAttribute('class', 'authorized_ul');
        var str = "";
        for (var i = 0; i < arr.length; i++) {
            str += "<li><div class='title'>" + arr[i].caption + "</div><p>" + arr[i].title + "</p><button>选择</botton></li>"
        }
        var strTitle = "<p class='check_p_one'>微信特约商户支付授权申请</p><p class='check_p_two'>选择主体类型</p>"
        ul.innerHTML = str;
        div.innerHTML = strTitle;
        div.appendChild(ul);
        document.body.appendChild(div);
        var li = ul.getElementsByTagName('li');
        var aDiv = ul.getElementsByTagName("div");
        var applicationParent = document.getElementById('applicationParent');
        var Information_to_fill_out = document.getElementById('Information_to_fill_out');
        var order_application = document.getElementById('order_application');
        
        for (var i = 0; i < li.length; i++) {
            li[i].index = i;
            if (li[i].getElementsByTagName) {
                var btn = li[i].getElementsByTagName("button")[0];
                btn.addEventListener("click", function () {
                    var index = this.parentNode.index;
                    data.value = arr[index].value;
                    this.parentNode.parentNode.parentNode.style.display = 'none';
                    Information_to_fill_out.style.display = 'block';
                    order_application.style.display = 'none';
                    if (componentNextPro) {
                        componentNextPro(data.value);
                    }
                })
            }

        }



    }

    // 营业执照照片
    this.photosOfBusinessLicense = function (data) {
        console.log(subject_type);
        var div = document.createElement("div");
        div.setAttribute('class', 'form-item');
        var str = "<div class='public_hr'></div>" +
            "<div class='form-item_children'>" +
            "<div class='application_phone' id='application_phone'>" +
            "<div class='data-hd'>" +
            "<h4 class='fl ng-binding'>营业执照</h4>" +
            "</div>" +
            "<div class='inner ng-scope'>" +
            "<div class='msg-ico'><i class='ico-msg-s info'></i></div>" +
            "<div class='msg-cnt'>" +
            "<p class='ng-binding'>请上传营业执照，需年检章齐全，当年注册除外</p>" +
            "</div>" +
            "<div id='application_phone_upData'></div>" +
            "</div>" +
            "</div>" +
            "<div style='width:100%;overflow:hidden'  id='yingyezhizhao'>" +
            "<label class='labels ng-binding'>" + data.caption + "</label>" +
            "<div class='application_phone_div'>" +
            "<a href='javascript:;' class='a-upload'>" +
            "<input type='file' name='' id=''>上传" +
            "</a>" +
            "<a href='javascript:;' class='a-upload'  style='display:none'>" +
            "<input type='file' name='' id=''>重新上传" +
            "</a>" +
            "<div class='upload-tips ng-binding'>请上传2M内的彩色照片 or 彩色扫描件 or 加盖公章鲜章的复印件，可添加“微信支付”相关水印（如微信支付认证）</div>" +
            "</div>" +
            "<ul id='application_list_one_ul_childer'>" +
            "<li>" +
            "<img src='' />" +
            "<a href='javascript:;'  class='del'>删除</a>" +
            "</li>" +
            "</ul>" +
            "<p class='text-error'>请填写营业执照照片</p>" +
            "<p class='text-error'>请上传2M内的彩色图片，格式可为bmp、png、jpeg、jpg或gif</p>" +
            "</div>" +
            "</div>"
        div.innerHTML = str;
        application_list_one.appendChild(div);
        this.publicImgUupData('yingyezhizhao');




    }



    this.license_number = function (data) {
        this.input_box(data, function (data) {
            console.log(subject_type);
            var a = data.verification_method();
            var organization_code_certificate = document.getElementById('organization_code_certificate');
            if (a == "" && data.value.length == 15) {
                organization_code_certificate.style.display = "block";
            } else {
                organization_code_certificate.style.display = "none";
            }

        })
    }


    // 组织机构代码证
    this.organization_copy = function (data) {
        var div = document.createElement('div');
        var div = document.createElement("div");
        div.setAttribute('class', 'form-item');
        div.setAttribute('id', 'organization_code_certificate');
        div.style.position = "relative";
        var str = "<div class='public_hr'></div>" +
            "<div class='form-item_children'>" +
            "<div class='form-item_children'>" +
            "<div class='application_phone' id='application_phone'>" +
            "<div class='data-hd'>" +
            "<h4 class='fl ng-binding'>组织机构代码证</h4>" +
            "</div>" +
            "<div class='inner ng-scope'>" +
            "<div class='msg-ico'><i class='ico-msg-s info'></i></div>" +
            "<div class='msg-cnt'>" +
            "<p class='ng-binding'>由于你的营业执照未三证合一，请上传“组织机构代码证”</p>" +
            "</div>" +
            "<div id='application_phone_upData'></div>" +
            "</div>" +
            "</div>" +
            "<div style='width:100%;overflow:hidden' id='zuzhijigou'>" +
            "<label class='labels ng-binding'>" + data.caption + "</label>" +
            "<div class='application_phone_div'>" +
            "<a href='javascript:;' class='a-upload'>" +
            "<input type='file' name='' id=''>上传" +
            "</a>" +
            "<a href='javascript:;' class='a-upload' style='display:none'>" +
            "<input type='file' name='' id=''>重新上传" +
            "</a>" +
            "<div class='upload-tips ng-binding'>请上传2M内的彩色照片 or 彩色扫描件 or 加盖公章鲜章的复印件，可添加“微信支付”相关水印（如微信支付认证）</div>" +
            "</div>" +
            "<ul id='application_list_one_ul_childer'>" +
            "<li>" +
            "<img src='' />" +
            "<a href='javascript:;'  class='del'>删除</a>" +
            "</li>" +
            "</ul>" +
            "<p class='text-error'>请填写组织机构代码证照片</p>" +
            "<p class='text-error'>请上传2M内的彩色图片，格式可为bmp、png、jpeg、jpg或gif</p>" +
            "</div>" +
            "</div>";
        div.innerHTML = str;
        application_list_one.appendChild(div);
        var organization_code_certificate = document.getElementById('organization_code_certificate');
        organization_code_certificate.style.display = 'none';
        this.publicImgUupData('zuzhijigou');

    }

    // 组织机构生成的方法--组织机构代码
    this.input_box_organization = function (data, componentNextPro) { // componentNextPro 是一个函数；
        var div = document.createElement("div");
        var label = document.createElement("label");
        var p = document.createElement('p');
        div.className = 'application_list_one_ul_li_div';
        label.className = "lable_left";
        p.className = "text-errors";
        label.innerText = data.caption;
        var input = document.createElement("input");
        input.className = "input_public";
        div.appendChild(label);
        div.appendChild(input);
        div.appendChild(p);
        var organization_code_certificate = document.getElementById('organization_code_certificate');
        organization_code_certificate.appendChild(div);
        input.onblur = function () {
            data.value = input.value ? input.value : "";
            var a = data.verification_method();
            if (a) {
                p.style.display = 'block';
                p.innerHTML = a;
            }
            if (componentNextPro) {
                componentNextPro(data);
            }
        }

        input.onfocus = function () {
            p.style.display = 'none';
        }
    }

    // 组织机构有效期限开始时间
    this.org_period_begin = function (data, componentNextPro) {
        var div = document.createElement("div");
        div.className = 'application_list_one_ul_li_divs';
        var str = "<label class='lable_lefts_time'>有效期限</label>" +
            "<div class='col-sm-6 col-sm_time'>" +
            "<div class='form-group'>" +
            "<div class='input-group date' id='datetimepicker1'>" +
            "<input type='text' id='datetimepicker1_input' class='form-control' />" +
            "<span class='input-group-addon'>" +
            "<span class='glyphicon glyphicon-calendar'></span>" +
            "</span>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "<i class='col-sm_time_i'>至</i>";
        div.innerHTML = str;
        var organization_code_certificate = document.getElementById('organization_code_certificate');
        organization_code_certificate.appendChild(div);
        $('#datetimepicker1').datetimepicker({
            format: 'YYYY-MM-DD',
            locale: moment.locale('zh-cn')

        });
        var input = div.getElementsByTagName('input')[0];

        input.onblur = function () {
            var text_errors_timeone = document.getElementById('text_errors_timeone');
            data.value = input.value ? input.value : "";
            var a = data.verification_method();
            if (a) {
                text_errors_timeone.style.display = 'block';
                text_errors_timeone.innerHTML = a;
            }
            if (componentNextPro) {
                componentNextPro(data);
            }
        }

        input.onfocus = function () {
            text_errors_timeone.style.display = 'none';
        }

    }

    // 组织机构有效期限结束时间
    this.org_period_end = function (data, componentNextPro) {
        var div = document.createElement("div");
        div.className = 'application_list_one_ul_li_divs';
        var str = "<div class='col-sm-6'>" +
            "<div class='form-group'>" +
            "<div class='input-group date' id='datetimepicker2'>" +
            "<input type='text' class='form-control' />" +
            "<span class='input-group-addon'>" +
            "<span class='glyphicon glyphicon-calendar'></span>" +
            "</span>" +
            "</div>" +
            "</div>" +
            "</div>";
        div.innerHTML = str;
        var organization_code_certificate = document.getElementById('organization_code_certificate');
        organization_code_certificate.appendChild(div);
        $('#datetimepicker2').datetimepicker({
            format: 'YYYY-MM-DD',
            locale: moment.locale('zh-cn')
        });
        var input = div.getElementsByTagName('input')[0];
        var p = document.createElement('p');
        p.setAttribute('id', 'text_errors_timeone');
        p.className = "text-errors_timeone";
        organization_code_certificate.appendChild(p);
        var p = document.createElement('p');
        p.setAttribute('id', 'text_errors_timetwo');
        p.className = "text-errors_timetwo";
        organization_code_certificate.appendChild(p);
        input.onblur = function () {
            data.value = input.value ? input.value : "";
            console.log(data);
            console.log(input.value)
            var a = data.verification_method();

            if (a) {
                p.style.display = 'block';
                p.innerHTML = a;
            }
            if (componentNextPro) {
                componentNextPro(data);
            }
        }
        input.onfocus = function () {
            p.style.display = 'none';
        }
    }



    // 证件类型 身份证还是其他类型的通行证（港澳台护照）
    this.id_doc_type = function (data) {
        var div = document.createElement("div");
        div.setAttribute('class', 'form-item_shenfenzheng');
        var divs = document.createElement("div");
        divs.setAttribute('id', 'form_item_shenfenzhengbottom');
        divs.setAttribute('class', 'clear_float');
        var divTwo = document.createElement('div');
        divTwo.setAttribute('id', 'form_item_shenfenzhengbottomTwo');
        divTwo.setAttribute('class', 'clear_float');
        divTwo.style.display = "none";

        div.innerHTML += this.createTitleTop('法定代表人/个体户经营者证件', '请上传法人的身份证/护照');
        var arr = [{
                name: '中国大陆居民--身份证',
                type: 'IDENTIFICATION_TYPE_IDCARD',
                types:'radio_id_doc_type'
            }, {
                name: '中国香港居民--来往内地通行证',
                type: 'IDENTIFICATION_TYPE_HONGKONG_PASSPORT',
                types:'radio_id_doc_type'
            }, {
                name: '中国澳门居民--来往内地通行证',
                type: 'IDENTIFICATION_TYPE_MACAO_PASSPORT',
                types:'radio_id_doc_type'
            },
            {
                name: '中国台湾居民--来往大陆通行证',
                type: 'IDENTIFICATION_TYPE_TAIWAN_PASSPORT',
                types:'radio_id_doc_type'
            }, {
                name: '其他国家或地区居民--护照',
                type: 'IDENTIFICATION_TYPE_OVERSEA_PASSPORT',
                types:'radio_id_doc_type'
            }
        ];


        this.three_syndromes_component("证件类型", arr, div, function (value) {

            var form_item_shenfenzhengbottom = document.getElementById('form_item_shenfenzhengbottom');
            var form_item_shenfenzhengbottomTwo = document.getElementById('form_item_shenfenzhengbottomTwo');

            data.value = value;
            if (value == "IDENTIFICATION_TYPE_IDCARD") {
                //身份证照显示
                //证件照隐藏
                form_item_shenfenzhengbottom.style.display = "block";
                form_item_shenfenzhengbottomTwo.style.display = "none";

            } else {
                //身份证照隐藏
                //证件照显示
                form_item_shenfenzhengbottom.style.display = "none";
                form_item_shenfenzhengbottomTwo.style.display = "block";
            }
        });
        application_list_one.appendChild(div);
        application_list_one.appendChild(divs);
        application_list_one.appendChild(divTwo);
        div.querySelectorAll("input")[0].click();
    }

    // 身份证人像面照片
    this.id_card_copy = function (data) {
        var str = this.createTitleTopAndImg('身份证人像面照片', '请填写身份证人像面照片','shenfenzhengzhaopianzhengmian');
        var form_item_shenfenzhengbottom = document.getElementById('form_item_shenfenzhengbottom');
        form_item_shenfenzhengbottom.appendChild(str);
        this.publicImgUupData('shenfenzhengzhaopianzhengmian');
    }


    // 身份证国徽面照片
    this.id_card_national = function (data) {
        var str = this.createTitleTopAndImg('身份证国徽面照片', '请填写身份证国徽面照片','shenfenzhengzhaopianfanmian');
        var form_item_shenfenzhengbottom = document.getElementById('form_item_shenfenzhengbottom');
        form_item_shenfenzhengbottom.appendChild(str);
        this.publicImgUupData('shenfenzhengzhaopianfanmian');
    }



    // 身份证姓名和身份证号码生成dom方法
    this.id_card_name_And_number = function (data, componentNextPro) {
        var dom = 'form_item_shenfenzhengbottom';
        this.input_box_id_card(data, dom, componentNextPro);
    }

    //证件号码和证件持有人姓名
    this.id_doc_name_and_name = function (data) {
        var dom = 'form_item_shenfenzhengbottomTwo';
        this.input_box_id_card(data, dom);
    }


    // 身份证开始有效期限
    this.card_period_begin = function (data, componentNextPro) {
        this.validity_start_time(data, componentNextPro, "datetimepicker3", "form_item_shenfenzhengbottom", "证件有效期", "text_errors_timethree");
    }

    // 身份证结束有效期限
    this.card_period_end = function (data, componentNextPro) {
        this.validity_end_time(data, componentNextPro, "datetimepicker4", "form_item_shenfenzhengbottom", "text_errors_timethree");

    }


    //经营者/法人是否为受益人
    this.owner = function (data, componentNextPro) {
        var dom = document.getElementById('application_list_one');
        var arr = [{
            name: '是',
            type: true,
            types:'radio_checked'
        }, {
            name: '否，非法定代表人/个体户经营者',
            type: false,
            types:'radio_checked'
        }];
        data.value = true; // 
        console.log(data);
        this.three_syndromes_components("是否为受益所有人", arr, dom, function (value) {
            data.value = value; // 赋值给经营者/法人是否为受益人这个数据
            var divParent = document.getElementById('divParent');
            
            if (data.value == true) {
                divParent.style.display='none';
            } else {
                divParent.style.display='block';
            }


        });

    }



    // 其他类型证件证件照片
    this.id_doc_copy = function (data, componentNextPro) {
        var str = this.createTitleTopAndImg('证件照片', '请填写证件照片','qitazhengjianzhaopian');
        var form_item_shenfenzhengbottomTwo = document.getElementById('form_item_shenfenzhengbottomTwo');
        form_item_shenfenzhengbottomTwo.appendChild(str);
        this.publicImgUupData('qitazhengjianzhaopian');
    }


    // 生成其他证件的开始时间方法
    this.doc_period_begin = function (data, componentNextPro) {
        this.validity_start_time(data, componentNextPro, 'datetimepicker5', "form_item_shenfenzhengbottomTwo", "证件有效期", "text_errors_timefour");
    }

    // 生成其他证件结束时间的方法
    this.doc_period_end = function (data, componentNextPro) {
        this.validity_end_time(data, componentNextPro, 'datetimepicker6', "form_item_shenfenzhengbottomTwo", "text_errors_timefour")
    }



    // 生成受益人信息
    this.id_type = function (data) {
        var str = this.createTitleTopTwo("受益人信息");
        var divParent = document.createElement('div');
        var divChildrenOne = document.createElement('div');
        var divChildrenTwo = document.createElement('div');
        var divChildrenThree = document.createElement('div');
        divParent.setAttribute('id', 'divParent');
        divChildrenOne.setAttribute('id', 'divChildrenOne');
        divChildrenTwo.setAttribute('id', 'divChildrenTwo');
        divChildrenThree.setAttribute('id','divChildrenThree');
        application_list_one.appendChild(divParent);
        divParent.appendChild(divChildrenOne);
        divParent.appendChild(divChildrenTwo);
        divParent.appendChild(divChildrenThree);
        divChildrenOne.innerHTML += str;
        divParent.style.display='none';
        var arr = [{
            name: '中国大陆居民--身份证',
            type: 'IDENTIFICATION_TYPE_IDCARD'
        }, {
            name: '中国香港居民--来往内地通行证',
            type: 'IDENTIFICATION_TYPE_HONGKONG_PASSPORT'
        }, {
            name: '中国澳门居民--来往内地通行证',
            type: 'IDENTIFICATION_TYPE_MACAO_PASSPORT'
        },
        {
            name: '中国台湾居民--来往大陆通行证',
            type: 'IDENTIFICATION_TYPE_TAIWAN_PASSPORT'
        }, {
            name: '其他国家或地区居民--护照',
            type: 'IDENTIFICATION_TYPE_OVERSEA_PASSPORT'
        }
    ];
    
    data.value='IDENTIFICATION_TYPE_IDCARD';   // 默认是身份证;
  
    this.three_syndromes_component("证件类型", arr, divChildrenOne, function (values) {
        data.value=values;  // 赋值给经营者/法人是否为受益人这个数据
        var shenfenzhengzhaopianzhengmian_one=document.getElementById('shenfenzhengzhaopianzhengmian_one');
        var shenfenzhengzhaopianfanmian_one=document.getElementById('shenfenzhengzhaopianfanmian_one');
        var qitazhengjianzhaopian_one=document.getElementById('qitazhengjianzhaopian_one');
        shenfenzhengzhaopianzhengmian_one.style.display = "block";
        shenfenzhengzhaopianfanmian_one.style.display = "block";
        qitazhengjianzhaopian_one.style.display = "none";

        if (values == "IDENTIFICATION_TYPE_IDCARD") {
            //身份证照显示
            //证件照隐藏
            shenfenzhengzhaopianzhengmian_one.style.display = "block";
            shenfenzhengzhaopianfanmian_one.style.display = "block";
            qitazhengjianzhaopian_one.style.display = "none";

        } else {
            //身份证照隐藏
            //证件照显示
            shenfenzhengzhaopianzhengmian_one.style.display = "none";
            shenfenzhengzhaopianfanmian_one.style.display = "none";
            qitazhengjianzhaopian_one.style.display = "block";
        }

    });

    }


    // 是否是受益人中的身份证正面照片
     this.id_card_copys=function(data){
        var str = this.createTitleTopAndImg('身份证人像面照片', '请填写身份证人像面照片','shenfenzhengzhaopianzhengmian_one');
        var divChildrenTwo = document.getElementById('divChildrenTwo');
        divChildrenTwo.appendChild(str);
       this.publicImgUupData('shenfenzhengzhaopianzhengmian_one');
     }


    // 是否是受益人中的身份证反面照片
     this.id_card_nationals=function(data){
        var str = this.createTitleTopAndImg('身份证国徽面照片', '请填写身份证国徽面照片','shenfenzhengzhaopianfanmian_one');
        var divChildrenTwo = document.getElementById('divChildrenTwo');
        divChildrenTwo.appendChild(str);
       this.publicImgUupData('shenfenzhengzhaopianfanmian_one');
     }

     // 是否是受益人中的证件照片
     this.id_doc_copys=function(data){
        var str = this.createTitleTopAndImg('证件照片', '请填写证件照片','qitazhengjianzhaopian_one');
        var divChildrenTwo = document.getElementById('divChildrenTwo');
        divChildrenTwo.appendChild(str);
        this.publicImgUupData('qitazhengjianzhaopian_one');
        var qitazhengjianzhaopian_one=document.getElementById('qitazhengjianzhaopian_one');
        qitazhengjianzhaopian_one.style.display="none";

     }

     // 是否是受益人姓名
     this.name=function(data){
        var dom = 'divChildrenTwo';
        this.input_box_id_card(data, dom);
     }
      // 是否是受益人证件号码
      this.id_number=function(data){
        var dom = 'divChildrenTwo';
        this.input_box_id_card(data, dom);
     }

     // 是否是受益人证件开始的时间
     this.id_period_begin=function(data,componentNextPro){
        this.validity_start_time(data, componentNextPro, "datetimepicker7", "divChildrenTwo", "证件有效期限", "text_errors_timefive");
     }


     // 是否是收益人证件结束的时间
    this.id_period_end = function (data, componentNextPro) {
        this.validity_end_time(data, componentNextPro, 'datetimepicker8', "divChildrenTwo", "text_errors_timefive")
    }

    // 经营信息 商户简称
    this.merchant_shortname=function(data,componentNextPro){
        var div = document.createElement("div");
        var img=document.createElement('img');
        var divImg=document.createElement("div");
        div.setAttribute('id', 'matation_form-item_shenfenzhengTwo');
        application_list_one.appendChild(div);
        div.innerHTML+=this.matation_title('经营信息');
        
        var dom = 'matation_form-item_shenfenzhengTwo';
        this.input_box_id_card(data, dom);
        var str='<i class="ico-msg-s" id="ico-msg-s_asks"></i>';
        img.src='../img/zhifu_jingyingxinxi.png';
        div.appendChild(divImg);
        divImg.appendChild(img)
        divImg.setAttribute('class','matation_jingying_img');  
        div.innerHTML+=str;
     


        
    }
     


    // 这个方法主要是针对dom的移除和添加设置公共方法；和input_box；相似。身份证姓名和身份证号码的方法
    this.input_box_id_card = function (data, dom, componentNextPro) { // componentNextPro 是一个函数；
        var div = document.createElement("div");
        var label = document.createElement("label");
        var p = document.createElement('p');
        div.className = 'application_list_one_ul_li_div';
        label.className = "lable_left";
        p.className = "text-errors";
        label.innerText = data.caption;
        var input = document.createElement("input");
        input.className = "input_public";
        div.appendChild(label);
        div.appendChild(input);
        div.appendChild(p);
        var organization_code_certificate = document.getElementById(dom);
        organization_code_certificate.appendChild(div);
        console.log(organization_code_certificate);
        console.log(div)
        input.onblur = function () {
            data.value = input.value ? input.value : "";
            console.log(data);
            console.log(data.value);
            var a = data.verification_method();
            if (a) {
                p.style.display = 'block';
                p.innerHTML = a;
            }

            if (componentNextPro) {
                componentNextPro(data);
            }
        }
        input.onfocus = function () {
            p.style.display = 'none';
        }
    }
   

    // 生成点击选项公共的方法
    this.three_syndromes_component = (caption, arr, dom, nextPro) => {
        let ul = document.createElement("ul");
        let labelCaption = document.createElement("label");
        var div = document.createElement('div');
        div.setAttribute('class', 'divs_public_shenfen');
        labelCaption.setAttribute('class', 'labels_public_shenfen');
        labelCaption.innerText = caption;
        ul.appendChild(labelCaption);
        ul.appendChild(div);
        var str = "";
        for (var i = 0; i < arr.length; i++) {
            var radios=null;
            if(arr[i].types){
                radios=arr[i].types
            }else{
                radios='radio';
            }
          
            str += '<li>' +
                '<div class="label_three_syndromes">' +
                '<label class="labelone_three_syndromes">' +
                '<input type="radio" name=\''+radios+'\' class="radioSelect">' +
                '<span></span>' +
                '<i>' + arr[i].name + '</i>' +
                '</label>' +
                '</div>' +
                '</li>';
        }

        div.innerHTML += str;
        dom.appendChild(ul);
        var inputs = ul.getElementsByTagName('input');
        inputs[0].checked=true;
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].onchange = function () {
                nextPro(arr[i].type)
            }
        }

    }


    // 生成复选框选项的公共方法
    this.three_syndromes_components = (caption, arr, dom, nextPro) => {
        let ul = document.createElement("ul");
        ul.setAttribute('class', 'publick_checked_list')
        let labelCaption = document.createElement("label");
        var div = document.createElement('div');
        div.setAttribute('class', 'divs_public_shenfen');
        labelCaption.setAttribute('class', 'labels_public_shenfen');
        labelCaption.innerText = caption;
        ul.appendChild(labelCaption);
        ul.appendChild(div);
        var str = "";
        for (var i = 0; i < arr.length; i++) {
            var radios=null;
            if(arr[i].types){
                radios=arr[i].types
            }else{
                radios='radio';
            }
          
            str += '<li>' +
                '<div class="label_three_syndromes">' +
                '<label class="labelone_three_syndromes">' +
                '<input type="radio" name=\''+radios+'\' class="radioSelect">' +
                '<span></span>' +
                '<i>' + arr[i].name + '</i>' +
                '</label>' +
                '</div>' +
                '</li>';
        }

        div.innerHTML += str;
        dom.appendChild(ul);
        ul.innerHTML += '<i class="ico-msg-s ask" id="ico-msg-s_ask"></i>';
        var str2 = '<div class="popup pop-left pos-top ng-hide" id="popup_ask" style="display:none">' +
            '<div class="inner">' +
            '<p class="ng-binding ng-scope">根据国家相关法律法规，您需要提供公司受益所有人信息。受益所有人需符合至少以下条件之一：1. 直接或者间接拥有超过25%公司股权或者表决权的自然人；2. 通过人事、财务等其他方式对公司进行控制的自然人；3. 公司的高级管理人员，包括公司的经理、副经理、财务负责人，上市公司董事会秘书和公司章程规定的其他人员</p>' +
            '</div>' +
            '<i class="arrow arrow-out"></i>' +
            '<i class="arrow arrow-in"></i>' +
            '</div>'
        ul.innerHTML += str2;
        var ico_msg_s_ask = document.getElementById('ico-msg-s_ask');
        var popup_ask = document.getElementById('popup_ask');
        ico_msg_s_ask.onmousemove = function () {
            popup_ask.style.display = 'block';
        }
        ico_msg_s_ask.onmouseout = function () {
            popup_ask.style.display = 'none';
        }



        var inputs = ul.getElementsByTagName('input');
        inputs[0].checked = true;
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].onchange = function () {
                nextPro(arr[i].type);
            }
        }

    }



    // 头部的方法 有副标题
    this.createTitleTop = function (str1, str2) {
        var str = "<div class='public_hr'></div>" +
            "<div class='form-item_children'>" +
            "<div class='application_phone' id='application_phone'>" +
            "<div class='data-hd'>" +
            "<h4 class='fl ng-binding'>" + str1 + "</h4>" +
            "</div>" +
            "<div class='inner ng-scope'>" +
            "<div class='msg-ico'><i class='ico-msg-s info'></i></div>" +
            "<div class='msg-cnt'>" +
            "<p class='ng-binding'>" + str2 + "</p>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "</div>";
        return str;
    }

    // 头部方法，没有副标题
    this.createTitleTopTwo = function (str1) {
        var str = "<div class='public_hr'></div>" +
            "<div class='form-item_children'>" +
            "<div class='application_phone' id='application_phone'>" +
            "<div class='data-hd'>" +
            "<h4 class='fl ng-binding'>" + str1 + "</h4>" +
            "</div>" +
            "<div class='inner ng-scope'>" +
            "<div class='msg-cnt'>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "</div>";
        return str;
    }



    // 生成上传图片信息的方法
    this.createTitleTopAndImg = function (str1,str2 ,domID) {
        var div = document.createElement("div");
        div.setAttribute('class', 'common_header_method');
        div.setAttribute('id', domID);
        var str = '<div class="createTitleTopAndImg_top">' +
            '<label class = "labels ng-binding">' + str1 + '</label>' +
            '<div class="application_phone_div">' +
            '<a href="javascript:;" class="a-upload"><input type="file" name="" id="">上传</a >' +
            '<a href="javascript:;" style="display:none" class="a-upload"><input type="file" name="" id="">重新上传</a>' +
            '<div class="upload-tips ng-binding">请上传2M内的彩色照片 or 彩色扫描件 or 加盖公章鲜章的复印件，可添加“微信支付”相关水印（如微信支付认证）</div>' +
            '</div>' +
            '</div>' +
            '<ul class="application_list_one_ul_childer">' +
            '<li>' +
            '<img src="">' +
            '<a href="javascript:;" class="del">删除</a>' +
            '</li>' +
            '</ul>' +
            '<p class="text-error">'+str2+'</p>' +
            '<p class="text-error">请上传2M内的彩色图片，格式可为bmp、png、jpeg、jpg或gif</p>';
        div.innerHTML = str;
        return div;
    }


    // 生成有效期开始时间公共方法
    this.validity_start_time = function (data, componentNextPro, idChildren, idParent, strs, idP) {
        var idChildrens = idChildren + '_input';
        var div = document.createElement("div");
        div.className = 'application_list_one_ul_li_divs';
        var str = "<label class='lable_lefts_time'>" + strs + "</label>" +
            "<div class='col-sm-6 col-sm_time'>" +
            "<div class='form-group'>" +
            "<div class='input-group date' id=\"" + idChildren + "\">" +
            "<input type='text' id=\"" + idChildrens + "\" class='form-control' />" +
            "<span class='input-group-addon'>" +
            "<span class='glyphicon glyphicon-calendar'></span>" +
            "</span>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "<i class='col-sm_time_i'>至</i>";
        div.innerHTML = str;
        var organization_code_certificate = document.getElementById(idParent);
        organization_code_certificate.appendChild(div);
        $('#' + idChildren).datetimepicker({
            format: 'YYYY-MM-DD',
            locale: moment.locale('zh-cn')
        });
        var input = div.getElementsByTagName('input')[0];
       
        input.onblur = function () {
            var text_errors_timeone = document.getElementById(idP);
            data.value = input.value ? input.value : "";
            var a = data.verification_method();
        
            if (a) {
                text_errors_timeone.style.display = 'block';
                text_errors_timeone.innerHTML = a;
            } else {
                text_errors_timeone.style.display = 'none';
            }
            
            if (componentNextPro) {
               
                componentNextPro(data);
            }
        }

        input.onfocus = function () {
            text_errors_timeone.style.display = 'none';
        }

    }


    // 生成有效期结束时间公共方法
    this.validity_end_time = function (data, componentNextPro, idChildren, idParent, idp) {
        var idChildrens = idChildren + '_input'
        var div = document.createElement("div");
        div.className = 'application_list_one_ul_li_divs';
        var str = "<div class='col-sm-6'>" +
            "<div class='form-group'>" +
            "<div class='input-group date' id=\"" + idChildren + "\">" +
            "<input type='text' class='form-control' />" +
            "<span class='input-group-addon'>" +
            "<span class='glyphicon glyphicon-calendar'></span>" +
            "</span>" +
            "</div>" +
            "</div>" +
            "</div>";
        div.innerHTML = str;
        var organization_code_certificate = document.getElementById(idParent);
        organization_code_certificate.appendChild(div);
        $('#' + idChildren).datetimepicker({
            format: 'YYYY-MM-DD',
            locale: moment.locale('zh-cn')
        });
        var input = div.getElementsByTagName('input')[0];
        var p1 = document.createElement('p');
        p1.setAttribute('id', idp);
        p1.className = "text-errors_timeone";
        organization_code_certificate.appendChild(p1);
        var p2 = document.createElement('p');
        p2.className = "text-errors_timetwo";
        organization_code_certificate.appendChild(p2);
        input.onblur = function () {
            data.value = input.value ? input.value : "";
            console.log(data.value)
            var a = data.verification_method();
            if (a) {
                p2.style.display = 'block';
                p2.innerHTML = a;
            }
            if (componentNextPro) {
                componentNextPro(data);
            }
        }
        input.onfocus = function () {
            p2.style.display = 'none';
        }
    }

    // 上传图片的公共方法
    this.publicImgUupData = function (dom) {
        var yingyezhizhao = document.getElementById(dom);
        var aA = yingyezhizhao.getElementsByTagName('a');
        var inputs = yingyezhizhao.getElementsByTagName('input');
        var ul = yingyezhizhao.getElementsByTagName('ul')[0];
        var p = yingyezhizhao.getElementsByTagName('p');
        var img = ul.getElementsByTagName('img')[0];
        var li = ul.getElementsByTagName('li')[0];
        li.style.display = 'none';
        p[0].style.display = 'none';
        p[1].style.display = 'none';
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].onchange = function () {
                var file = this.files[0];
                console.log(file);
                var sizeImg = file.size;
                if (sizeImg > 2048000) {
                    p[0].style.display = 'block';
                    return;
                } else {
                    p[0].style.display = 'none';
                }
                var reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = function (ev) {
                    li.style.display = 'block';
                    img.src = ev.target.result;
                    aA[1].style.display = 'block';
                    aA[0].style.display = 'none';
                    inputs[1].style.width = '100px';
                    aA[1].style.width = '100px';
                    aA[1].style.paddingLeft = '0px';
                    aA[1].style.paddingRight = '0px';
                }
            }
        }
        var a = ul.getElementsByTagName('a')[0];
        a.onclick = function () {
            li.style.display = 'none';
            p[0].style.display = 'block';
        }

    }


    // 公共方法生成节点
    this.input_box = function (data, componentNextPro) { // componentNextPro 是一个函数；
        var div = document.createElement("div");
        var label = document.createElement("label");
        var p = document.createElement('p');
        div.className = 'application_list_one_ul_li_div';
        label.className = "lable_left";
        p.className = "text-errors";
        label.innerText = data.caption;
        var input = document.createElement("input");
        input.className = "input_public";
        div.appendChild(label);
        div.appendChild(input);
        div.appendChild(p);
        application_list_one.appendChild(div);
        input.onblur = function () {
            data.value = input.value ? input.value : "";
            var a = data.verification_method();
            if (a) {
                p.style.display = 'block';
                p.innerHTML = a;
            }

            if (componentNextPro) {
                componentNextPro(data);
            }
        }

        input.onfocus = function () {
            p.style.display = 'none';
        }

    }

    // 生成分类标题如主体信息，经营信息等
    this.matation_title=function(str){
        var str='<div class="info-hd">'+
        '<h2 class="ng-binding">'+str+'</h2></div>';
        return str;
    }



}























// 个体户经营者/法人 姓名
/*   this.legal_person=function(data,componentNextPro){
        var div = document.createElement("div");
        var label = document.createElement("label");
        var p = document.createElement('p');
        div.className='application_list_one_ul_li_div';
        label.className = "lable_left";
        p.className = "text-errors";
        label.innerText = data.caption;
        var input = document.createElement("input");
        input.className = "input_public";
        div.appendChild(label);
        div.appendChild(input);
        div.appendChild(p);
        application_list_one.appendChild(div);
        input.onblur = function(){
            data.value=input.value ? input.value:"";
            var a = data.verification_method();
            if(a){
                p.style.display = 'block';
                p.innerHTML = a;
            }
        }

        input.onfocus = function(){
            p.style.display = 'none';
        }
        var div = document.createElement("div");
        div.className='three_zhengOne';
        var p = document.createElement('p');
        p.innerHTML='若营业执照注册号为18位统一社会信用代码，请选择“已三证合一”，否则请选择“未三证合一”';
        div.innerHTML=three_syndromes_component();
        div.appendChild(p);
        application_list_one.appendChild(div);

        var label_three_syndromes=document.getElementById('label_three_syndromes');
        var inputs=label_three_syndromes.getElementsByTagName('input');
        for(var i=0;i<inputs.length;i++){
            inputs.onclick=function(){
                console.log(this)
            }
        }

    }

*/


/*
function three_syndromes_component(arr){
    console.log(arr);
    var str='';
    for(var i=0;i<arr.length;i++){
        str += '<div class="application_list_one_ul_li_div">'+
        '<label class="three_syndromes_lable_left">类型</label>'+
        '<div class="label_three_syndromes" id="label_three_syndromes">'+
            '<label class="labelone_three_syndromes">'+
                '<input type="radio" name="radio" class="radioSelect">'+
                '<span></span>'+
                '<i>已三证合一</i>'+
            '</label>'+
            '<label class="labeltwo_three_syndromes">'+
                '<input type="radio" name="radio" checked class="radioSelect">'+
                '<span></span>'+
                '<i>未三证合一</i>'+
            '</label>'+
        '</div>'+
      '</div>';
    }
      return str;
}

*/