(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{566:function(e,v,_){e.exports=_.p+"assets/img/architecture.97b6cce2.png"},567:function(e,v,_){e.exports=_.p+"assets/img/dubbo-framework.5eef3de2.jpg"},686:function(e,v,_){"use strict";_.r(v);var o=_(52),t=Object(o.a)({},(function(){var e=this,v=e.$createElement,o=e._self._c||v;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("p",[e._v("Dubbo 是一个高性能的 Java RCP 框架")]),e._v(" "),o("p",[o("img",{attrs:{src:_(566),alt:"img"}})]),e._v(" "),o("ol",{attrs:{start:"0"}},[o("li",[e._v("服务容器负责启动，加载，运行服务提供者。")]),e._v(" "),o("li",[e._v("服务提供者在启动时，向注册中心注册自己提供的服务。")]),e._v(" "),o("li",[e._v("服务消费者在启动时，向注册中心订阅自己所需的服务。")]),e._v(" "),o("li",[e._v("注册中心返回服务提供者地址列表给消费者，如果有变更，注册中心将基于长连接推送变更数据给消费者。")]),e._v(" "),o("li",[e._v("服务消费者，从提供者地址列表中，基于软负载均衡算法，选一台提供者进行调用，如果调用失败，再选另一台调用。")]),e._v(" "),o("li",[e._v("服务消费者和提供者，在内存中累计调用次数和调用时间，定时每分钟发送一次统计数据到监控中心。")])]),e._v(" "),o("p",[o("img",{attrs:{src:_(567),alt:""}})]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("config 配置层")]),e._v("：对外配置接口，以 "),o("code",[e._v("ServiceConfig")]),e._v(", "),o("code",[e._v("ReferenceConfig")]),e._v(" 为中心，可以直接初始化配置类，也可以通过 spring 解析配置生成配置类")]),e._v(" "),o("li",[o("strong",[e._v("proxy 服务代理层")]),e._v("：服务接口透明代理，生成服务的客户端 Stub 和服务器端 Skeleton, 以 "),o("code",[e._v("ServiceProxy")]),e._v(" 为中心，扩展接口为 "),o("code",[e._v("ProxyFactory")])]),e._v(" "),o("li",[o("strong",[e._v("registry 注册中心层")]),e._v("：封装服务地址的注册与发现，以服务 URL 为中心，扩展接口为 "),o("code",[e._v("RegistryFactory")]),e._v(", "),o("code",[e._v("Registry")]),e._v(", "),o("code",[e._v("RegistryService")])]),e._v(" "),o("li",[o("strong",[e._v("cluster 路由层")]),e._v("：封装多个提供者的路由及负载均衡，并桥接注册中心，以 "),o("code",[e._v("Invoker")]),e._v(" 为中心，扩展接口为 "),o("code",[e._v("Cluster")]),e._v(", "),o("code",[e._v("Directory")]),e._v(", "),o("code",[e._v("Router")]),e._v(", "),o("code",[e._v("LoadBalance")])]),e._v(" "),o("li",[o("strong",[e._v("monitor 监控层")]),e._v("：RPC 调用次数和调用时间监控，以 "),o("code",[e._v("Statistics")]),e._v(" 为中心，扩展接口为 "),o("code",[e._v("MonitorFactory")]),e._v(", "),o("code",[e._v("Monitor")]),e._v(", "),o("code",[e._v("MonitorService")])]),e._v(" "),o("li",[o("strong",[e._v("protocol 远程调用层")]),e._v("：封装 RPC 调用，以 "),o("code",[e._v("Invocation")]),e._v(", "),o("code",[e._v("Result")]),e._v(" 为中心，扩展接口为 "),o("code",[e._v("Protocol")]),e._v(", "),o("code",[e._v("Invoker")]),e._v(", "),o("code",[e._v("Exporter")])]),e._v(" "),o("li",[o("strong",[e._v("exchange 信息交换层")]),e._v("：封装请求响应模式，同步转异步，以 "),o("code",[e._v("Request")]),e._v(", "),o("code",[e._v("Response")]),e._v(" 为中心，扩展接口为 "),o("code",[e._v("Exchanger")]),e._v(", "),o("code",[e._v("ExchangeChannel")]),e._v(", "),o("code",[e._v("ExchangeClient")]),e._v(", "),o("code",[e._v("ExchangeServer")])]),e._v(" "),o("li",[o("strong",[e._v("transport 网络传输层")]),e._v("：抽象 mina 和 netty 为统一接口，以 "),o("code",[e._v("Message")]),e._v(" 为中心，扩展接口为 "),o("code",[e._v("Channel")]),e._v(", "),o("code",[e._v("Transporter")]),e._v(", "),o("code",[e._v("Client")]),e._v(", "),o("code",[e._v("Server")]),e._v(", "),o("code",[e._v("Codec")])]),e._v(" "),o("li",[o("strong",[e._v("serialize 数据序列化层")]),e._v("：可复用的一些工具，扩展接口为 "),o("code",[e._v("Serialization")]),e._v(", "),o("code",[e._v("ObjectInput")]),e._v(", "),o("code",[e._v("ObjectOutput")]),e._v(", "),o("code",[e._v("ThreadPool")])])]),e._v(" "),o("h2",{attrs:{id:"dubbo-spi-机制"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#dubbo-spi-机制"}},[e._v("#")]),e._v(" Dubbo SPI 机制")]),e._v(" "),o("h2",{attrs:{id:"service-导出"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#service-导出"}},[e._v("#")]),e._v(" Service 导出")]),e._v(" "),o("h2",{attrs:{id:"service-导入"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#service-导入"}},[e._v("#")]),e._v(" Service 导入")]),e._v(" "),o("ul",[o("li",[e._v("使用服务直连的方式引用服务")]),e._v(" "),o("li",[e._v("使用注册中心的方式引用服务")])]),e._v(" "),o("h2",{attrs:{id:"service-调用过程"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#service-调用过程"}},[e._v("#")]),e._v(" Service 调用过程")])])}),[],!1,null,null,null);v.default=t.exports}}]);