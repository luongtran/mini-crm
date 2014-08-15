<?php

class Purchase extends \Eloquent {
    protected $table="purchases";
    protected $fillable = ['customer_id','note','customer_order'];
    public static $rule = [];
}