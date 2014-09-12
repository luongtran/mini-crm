<?php

class Purchase extends \Eloquent {
    protected $table="purchases";
    protected $fillable = ['note','customer_order'];
    public static $rule = [];
}