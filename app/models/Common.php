<?php

class Common extends \Eloquent {
	protected $fillable = [];
        /*
        * Phương thức chống Xss trên tất cả dữ liệu vào và ra.
        */
        public static function globalXssClean()
        {
        // Sử dụng cho toàn bộ dữ liệu nhập vào
        $sanitized = static::arrayStripTags(Input::get());
        Input::merge($sanitized);
        }

        public static function arrayStripTags($array)
        {
        $result = array();

        foreach ($array as $key => $value) {

        //Loại bỏ các thẻ đặc biệt, có thể hữu ích khi ta sử dụng form động.
        $key = strip_tags($key);

        //Nếu dữ liệu là một mảng thì ta đưa nó vào hàm arrayStripTags
        if (is_array($value)) {
        $result[$key] = static::arrayStripTags($value);
        } else {

        //Mình sử dụng strip_tags(), bạn cũng có thể dùng htmlentities() nếu muốn.

        //hàm trim() dùng để loại bỏ các khoảng trắng dư thừa, nếu không muốn bạn có thể xóa nó.
        $result[$key] = trim(strip_tags($value));
        }
        }

        return $result;
        }
}