<?php 



// Add VC Support

add_action( 'rest_api_init', function ()
{
   register_rest_field(
          'page',
          'content',
          array(
                 'get_callback'    => 'compasshb_do_shortcodes',
                 'update_callback' => null,
                 'schema'          => null,
          )
       );
});

function compasshb_do_shortcodes( $object, $field_name, $request )
{
   WPBMap::addAllMappedShortcodes(); // This does all the work

   global $post;
   $post = get_post ($object['id']);
   $output['rendered'] = apply_filters( 'the_content', $post->post_content );

   return $output;
}


function prepare_rest_data($data, $post, $request){
	$_data = $data->data; 
	$cats = get_the_category($post->ID); 
        $tags = get_the_tags($post->ID); 
  
        $_data['cats'] = $cats; 
        $_data['tags'] = $tags; 

        $data->data = $_data; 
        return $data; 

}
add_filter('rest_prepare_post', 'prepare_rest_data', 10, 3); 