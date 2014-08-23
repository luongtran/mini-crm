<?php

class TicketActivity extends \Eloquent {

		const create = "Create";
		const update = "Update";
		const reply = "Reply";

        protected  $table="ticket_activity";
		protected $fillable = [];
}