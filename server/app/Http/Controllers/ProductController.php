<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Image;
use App\Models\Thumbnail;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{
    /**
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // obtiene todos los productos y sus imagenes
        $products = DB::table('products')
                    ->join('thumbnails', 'products.id', '=', 'thumbnails.product_id')
                    ->select('products.*', 'thumbnails.thumbnail')
                    ->get();


        return $products;

        // $products = Product::all();
        // return $products->images;
    }

    /**
     * @param  \App\Http\Requests\StoreProductRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $fields = $request->validate([
            'name' => 'required|string',
            'description' => 'required|string',
            'price' => 'required',
            'category' => 'required|string',
            'brand' => 'required|string',
            'shipping' => 'boolean',
            'quantity' => 'required|int',
            'sku' => 'string',
            // 'thumbnail' => 'required|image'
        ]);

        // guarda la informacion en la DB
        $product = Product::create($fields);
        $id = $product->id;
        $sku = $product->sku;

        // guarda el thumbnail del producto en la tabla basado en su sku
        $t = new Thumbnail();
        $t->product_id = $id;
        $t->thumbnail = "https://media.musiciansfriend.com/is/image/MMGS7/{$sku}-00-2000x2000.jpg";
        $t->save();
        
        // guarda el thumbnail en la tabla de imagenes
        $image = new Image();
        $image->product_id = $id;
        $image->image = "https://media.musiciansfriend.com/is/image/MMGS7/{$sku}-00-2000x2000.jpg";
        $image->save();

        // guarda las imagenes en la tabla de imagenes
        for ($i = 1; $i < 4; $i++) {
            $newImage = new Image();
            $newImage->product_id = $id;
            $newImage->image = "https://media.musiciansfriend.com/is/image/MMGS7/{$sku}-0{$i}-2000x2000.jpg";
            $newImage->save();
        }

        $response = [
            'message' => 'Product created'
        ];

        return response($response, 201);

    }

    // obtiene un solo producto basado en su id
    public function getProduct($id) {
        $product = Product::find($id);
        if (!$product){
            return response([
                'message' => 'No Product with the ID: '.$id
            ], 401);
        }
        // $images = $product->images;
        $product->images;
        // $product->thumbnail->thumbnail;

        // $response = [
        //     'product' => $product,
        //     // 'images' => $images
        // ];

        // return response($response, 200);
        return response($product, 200);
    }

    /**
     * @param  \App\Http\Requests\UpdateProductRequest  $request
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {

        // return Product::update($request->all());
        return Product::find($request->id)->update($request->all());

        // $fields = $request->validate([
        //     'name' => 'required|string',
        //     'description' => 'required|string',
        //     'price' => 'required',
        //     'category' => 'required|string',
        //     'brand' => 'required|string',
        //     'shipping' => 'required|boolean',
        //     'sku' => 'string',
        //     'colors' => 'string'
        // ]);

        // Product::update($fields);

        // $id = $request->id;

        // if ($request->has('images')) {
        //     foreach($request->file('images') as $image) {

        //         $imageName= $id.'_'.$fields['name'].'_image_'.time().rand(1,1000).'.'.$image->extension();

        //         // store the images in the images table
        //         Image::create([
        //             'product_id' => $id,
        //             'image' => $path
        //         ]);
        //     }
        // }

        // $response = [
        //     'message' => 'Product created'
        // ];

        // return response($response, 201);


    }

    /**
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $path = 'products/'.$id;

        return Product::destroy($id);

        // return Product::find($id)->delete();

        // $product = Product::find($id);
        // $product->delete();
    }
}
