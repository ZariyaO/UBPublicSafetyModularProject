<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreRecipientRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'userId'=>['required'],
            'messageId'=>['required'],
        ];
    }

    protected function prepareForValidation() {
        $this->merge([
            'user_id'=>$this->userId,
            'message_id'=>$this->messageId,
        ]);
    }
}
