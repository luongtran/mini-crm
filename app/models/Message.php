<?php

class Message extends \Eloquent {
	protected $fillable = [];
        protected $table="messages";
        const work =1;
        const respone =2;  
        const warning =3;                
}