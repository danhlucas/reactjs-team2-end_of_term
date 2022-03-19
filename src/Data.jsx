const DATA = [
    {
        id : 0,
        title : "IPhone 13",
        price : 1800,
        desc : "Thông tin sản phẩm iPhone 13 512 GB xứng đáng với sự chờ mong của iFan khi sở hữu nét sang trọng đầy tinh tế, cấu hình đột phá, 2 camera sau chụp hình chuyên nghiệp, thời lượng pin kéo dài cũng như kết nối 5G mượt mà, hoàn đáp đáp ứng các yêu cầu khó tính từ người dùng.",
        img : "/assets/images/products/iphone13.png"
    },
    {
        id : 1,
        title : "IPhone 12",
        price : 1050,
        desc : "Thông tin sản phẩm iPhone 12 256 GB mẫu smartphone của Apple gây ấn tượng với một thiết kế mới, vi xử lý A14 Bionic mạnh mẽ, camera ấn tượng và khả năng kết nối 5G. Nếu là một fan Táo “chân chính” thì đây là siêu phẩm mà bạn không thể bỏ qua.",
        img : "/assets/images/products/iphone12.png"
    },
    {
        id : 2,
        title : "IPhone 12 Pro",
        price : 1150,
        desc : "Thông tin sản phẩm Không thể phủ nhận, sự ra đời của iPhone 12 Pro Max 512 GB chính là đòn tấn công nghiêm túc của Apple dành cho các đối thủ. Sự chỉnh chu tổng thể từ ngoại hình cho đến sức mạnh tiềm tàng bên trong, chính là nguồn cảm hứng để các ông lớn trong ngành phấn đấu vượt qua.",
        img : "/assets/images/products/iphone12pro.png"
    },
    {
        id : 3,
        title : "IPhone 12 Pro Max",
        price : 1250,
        desc : "Thông tin sản phẩm Apple luôn nắm bắt thị hiếu người dùng, do đó không khó để lý giải sự thành công của những “đứa con tinh thần” nhà táo. Trong đó phải kể đến iPhone 12 Pro Max 256 GB, “gã khổng lồ” khó có đối thủ nào đánh bại.",
        img : "/assets/images/products/iphone12promax.png"
    },
    {
        id : 4,
        title : "Tủ lạnh LG Inverter 255 lít GN-M255BL",
        price : 500,
        desc : "Thông tin sản phẩm Vận hành êm ái, ổn định với công nghệ J-Tech Inverter Với 36 cấp độ làm lạnh của công nghệ J-Tech Inverter, tủ lạnh Sharp 253 lít có khả năng vận hành vô cùng ổn định, êm ái, hạn chế tối đa tiếng ồn khó chịu, ảnh hưởng đến giấc ngủ cũng như sự tập trung của bạn. Hơn nữa, nhờ công nghệ này, tủ lạnh Sharp còn góp phần tiết kiệm đáng kể chi phí điện tiêu thụ của gia đình.",
        img : "/assets/images/products/tulanh1.jpg"
    },
    {
        id : 5,
        title : "Tủ lạnh Toshiba Inverter 233 lít",
        price : 600,
        desc : "Thông tin sản phẩm Vận hành êm ái, ổn định với công nghệ J-Tech Inverter Với 36 cấp độ làm lạnh của công nghệ J-Tech Inverter, tủ lạnh Sharp 253 lít có khả năng vận hành vô cùng ổn định, êm ái, hạn chế tối đa tiếng ồn khó chịu, ảnh hưởng đến giấc ngủ cũng như sự tập trung của bạn. Hơn nữa, nhờ công nghệ này, tủ lạnh Sharp còn góp phần tiết kiệm đáng kể chi phí điện tiêu thụ của gia đình.",
        img : "/assets/images/products/tulanh2.jpg"
    },
    {
        id : 6,
        title : "Tủ lạnh Toshiba Inverter 233",
        price : 700,
        desc : "Thông tin sản phẩm Vận hành êm ái, ổn định với công nghệ J-Tech Inverter Với 36 cấp độ làm lạnh của công nghệ J-Tech Inverter, tủ lạnh Sharp 253 lít có khả năng vận hành vô cùng ổn định, êm ái, hạn chế tối đa tiếng ồn khó chịu, ảnh hưởng đến giấc ngủ cũng như sự tập trung của bạn. Hơn nữa, nhờ công nghệ này, tủ lạnh Sharp còn góp phần tiết kiệm đáng kể chi phí điện tiêu thụ của gia đình.",
        img : "/assets/images/products/tulanh3.jpg"
    },
    {
        id : 7,
        title : "Tủ lạnh Samsung Inverter 280 lít",
        price : 800,
        desc : "Thông tin sản phẩm Vận hành êm ái, ổn định với công nghệ J-Tech Inverter Với 36 cấp độ làm lạnh của công nghệ J-Tech Inverter, tủ lạnh Sharp 253 lít có khả năng vận hành vô cùng ổn định, êm ái, hạn chế tối đa tiếng ồn khó chịu, ảnh hưởng đến giấc ngủ cũng như sự tập trung của bạn. Hơn nữa, nhờ công nghệ này, tủ lạnh Sharp còn góp phần tiết kiệm đáng kể chi phí điện tiêu thụ của gia đình.",
        img : "/assets/images/products/tulanh4.jpg"
    },
    {
        id : 8,
        title : "Macbook Pro M1",
        price : 2000,
        desc : "Thông tin sản phẩm Thiết kế sang trọng, mỏng nhẹ cùng với sức mạnh vượt trội nhờ chip M1 độc quyền ở Apple MacBook Pro M1 2020 sẽ đem lại cho bạn trải nghiệm tuyệt vời từ giải trí đến công việc văn phòng hay đồ họa chuyên nghiệp.",
        img : "/assets/images/products/laptop1.jpg"
    },
    {
        id : 9,
        title : "MacBook Air M1 2020",
        price : 1800,
        desc : "Thông tin sản phẩm Laptop Apple MacBook Air M1 2020 có thiết kế mỏng nhẹ, cao cấp cùng cấu hình mạnh mẽ đến từ con chip M1 độc quyền của Apple hứa hẹn sẽ là một trợ thủ đắc lực của bạn trong công việc, xử lý được tác vụ văn phòng lẫn các thiết kế đồ hoạ.",
        img : "/assets/images/products/laptop2.jpg"
    },
    {
        id : 10,
        title : "Dell Gaming G15 5511",
        price : 1500,
        desc : "Thông tin sản phẩm Laptop Dell Gaming G15 5511 i5 (70266676) có hiệu năng mạnh mẽ đến từ con chip Intel thế hệ 11 luôn sẵn sàng cùng bạn tác chiến trên mọi chiến trường ảo, phong cách thiết kế hầm hố đậm chất gaming nhưng vẫn giữ được sự linh hoạt.",
        img : "/assets/images/products/laptop3.jpg"
    },
    {
        id : 11,
        title : "HP Gaming VICTUS 16",
        price : 1450,
        desc : "Thông tin sản phẩm Laptop HP Gaming VICTUS 16 e0170AX R7 (4R0U7PA) mang đến một cấu hình mạnh mẽ phục vụ tốt cho mọi nhu cầu với bộ vi xử lý AMD và card đồ họa rời GeForce RTX 3050Ti từ nhà NVIDIA. Mẫu laptop HP VICTUS này cho khả năng đồ họa, render video, thiết kế 2D,... và chơi các tựa game thịnh hành một cách mượt mà nhờ được trang bị CPU AMD Ryzen 7 5800H và card rời GeForce RTX 3050Ti 4 GB.",
        img : "/assets/images/products/laptop4.jpg"
    },
    {
        id : 12,
        title : "Tai nghe Bluetooth True Wireless Mozard TS13 ",
        price : 1150,
        desc : "Thiết kế gọn đẹp, hiện đại, có thể mang theo đến mọi nơi Kiểu dáng tai nghe Mozard đơn giản, màu đen thanh lịch, bạn có thể đeo trực tiếp trên tai khi di chuyển hoặc cho vào hộp sạc và nhét trong túi xách, balo là nhẹ nhàng mang đi, tạo sự thuận tiện cho bất kỳ người dùng nào với trọng lượng chỉ 39 gam. Phần hộp sạc được phủ lớp vỏ nhám tạo cảm giác cầm nắm chắc tay, ít bám mồ hôi hay vân tay. Ngoài ra hộp dạng kín được thiết kế bảo vệ tai nghe và hỗ trợ nạp pin dễ dàng.",
        img : "/assets/images/products/tainghe1.jpeg"
    },
    {
        id : 13,
        title : "Tai nghe Bluetooth AirPods Pro MagSafe",
        price : 1150,
        desc : "Thiết kế gọn đẹp, hiện đại, có thể mang theo đến mọi nơi Kiểu dáng tai nghe Mozard đơn giản, màu đen thanh lịch, bạn có thể đeo trực tiếp trên tai khi di chuyển hoặc cho vào hộp sạc và nhét trong túi xách, balo là nhẹ nhàng mang đi, tạo sự thuận tiện cho bất kỳ người dùng nào với trọng lượng chỉ 39 gam. Phần hộp sạc được phủ lớp vỏ nhám tạo cảm giác cầm nắm chắc tay, ít bám mồ hôi hay vân tay. Ngoài ra hộp dạng kín được thiết kế bảo vệ tai nghe và hỗ trợ nạp pin dễ dàng.",
        img : "/assets/images/products/tainghe2.jpeg"
    },
    {
        id : 14,
        title : "Tai nghe Bluetooth Beats Flex MYMC2/ MYMD2",
        price : 1150,
        desc : "Thiết kế gọn đẹp, hiện đại, có thể mang theo đến mọi nơi Kiểu dáng tai nghe Mozard đơn giản, màu đen thanh lịch, bạn có thể đeo trực tiếp trên tai khi di chuyển hoặc cho vào hộp sạc và nhét trong túi xách, balo là nhẹ nhàng mang đi, tạo sự thuận tiện cho bất kỳ người dùng nào với trọng lượng chỉ 39 gam. Phần hộp sạc được phủ lớp vỏ nhám tạo cảm giác cầm nắm chắc tay, ít bám mồ hôi hay vân tay. Ngoài ra hộp dạng kín được thiết kế bảo vệ tai nghe và hỗ trợ nạp pin dễ dàng.",
        img : "/assets/images/products/tainghe3.jpg"
    },
    {
        id : 15,
        title : "Tai nghe chụp tai Kanen IP-892",
        price : 1150,
        desc : "Thiết kế gọn đẹp, hiện đại, có thể mang theo đến mọi nơi Kiểu dáng tai nghe Mozard đơn giản, màu đen thanh lịch, bạn có thể đeo trực tiếp trên tai khi di chuyển hoặc cho vào hộp sạc và nhét trong túi xách, balo là nhẹ nhàng mang đi, tạo sự thuận tiện cho bất kỳ người dùng nào với trọng lượng chỉ 39 gam. Phần hộp sạc được phủ lớp vỏ nhám tạo cảm giác cầm nắm chắc tay, ít bám mồ hôi hay vân tay. Ngoài ra hộp dạng kín được thiết kế bảo vệ tai nghe và hỗ trợ nạp pin dễ dàng.",
        img : "/assets/images/products/tainghe4.jpg"
    },
    
]

export default DATA;