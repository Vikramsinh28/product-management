import React from 'react'
import Navbar from '../components/Navbar'
import { useFormik } from "formik";
import * as Yup from 'yup';
import { makeStyles } from '@mui/styles';

import {  Grid, TextField , Button , InputLabel, Stack, TextareaAutosize , helperText } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';

const useStyles = makeStyles((theme) => ({  
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

const ProductAdd = () => {

    const validationSchema = Yup.object().shape({
        productName : Yup.string().required("Product Name is required"),
        productDescription : Yup.string().required("Product Description is required"),
        productPrice : Yup.number().required("Product Price is required"),
        availibility : Yup.boolean().required("Product Availibility is required"),
        productFeatures : Yup.string().required("Product Features is required")
    });

    const formik = useFormik({
        initialValues: {
            productName: '',
            productDescription: '',
            productImages : [],
            productPrice : 0,
            availibility : false,
            shippingInfo : '',
            productDimensions : '',
            productWeight : 0,
            materialAndConstruction : '',
            productFeatures : '',
            reviewsRating : 0,
            relatedProducts : [],
            frequentlyAskedQuestions : [],
            productWarranty : '',
            productReturnPolicy : '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
            console.log(values);
        }
    });

    const handleImageUpload = (e) => { 
        const files = e.target.files;
        formik.setFieldValue("productImages", [...formik.values.productImages , ...files]);
    };

    const handleEditorChange = (editorValue) => {
        formik.setFieldValue("frequentlyAskedQuestions", editorValue);
    };

  return (
    <>
            <Navbar/>

            <Grid container
                 direction="column"
                 alignItems="center"
                 justifyContent="center"
                 style={{ minHeight: '100vh' , backgroundColor : '#f5f5f5' , padding : '20px' }}
            >

                <Grid container
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    style={{ minHeight: '100vh' }}
                >
                        <h1>Product Add Form</h1>
                        <form onSubmit={formik.handleSubmit} className = {useStyles} style={{
                            width : '100%',
                            maxWidth : '800px',
                            padding : '20px',
                            backgroundColor : '#fff',
                            borderRadius : '5px',
                            boxShadow : '0 0 10px rgba(0,0,0,0.1)',
                            display : 'flex',
                            gap : '20px',
                            justifyContent : 'center',
                        }}>
                            <Grid container style={{gap : '20px'}}>
                                <Grid item  xs={12} md={6} > 
                                        <InputLabel style={{marginBottom : '8px'}}>Product Name</InputLabel>
                                        <TextField
                                            fullWidth
                                            id="productName"
                                            name="productName"
                                            type="text"
                                            onChange={formik.handleChange}
                                            value={formik.values.productName}
                                            onBlur={formik.handleBlur}
                                            error={formik.touched.productName && Boolean(formik.errors.productName)}
                                            helperText={formik.touched.productName && formik.errors.productName}
                                            sx = {{marginTop : 2}}
                                        />
                                </Grid>

                                <Grid item  xs={12} md={6}>
                                    <InputLabel style={{marginBottom : '8px'}}>Product Description</InputLabel>
                                    <TextareaAutosize
                                        style={
                                            {
                                                resize : 'none',
                                                width : '100%',
                                                padding : '10px',
                                                borderRadius : '5px',
                                                border : '1px solid #ccc',
                                                borderWidth : '1px',
                                            }
                                        }
                                        minRows={5}
                                        fullWidth
                                        id="productDescription"
                                        name="productDescription"
                                        type="text"
                                        value={formik.values.productDescription}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.productDescription && Boolean(formik.errors.productDescription)}
                                        helperText={formik.touched.productDescription && formik.errors.productDescription}
                                        sx = {{marginTop : 2}}
                                    />
                                </Grid>

                                <Grid item  xs={12} md={6}>
                                        <InputLabel htmlFor="productImages">Product Images</InputLabel>
                                        <Stack direction="row" spacing={2}>
                                            {
                                                formik.values.productImages.map((image , index) => (
                                                    <img key={index} src={URL.createObjectURL(image)} alt={image.name} width="100px" height="100px" />
                                                ))
                                            }
                                        </Stack>
                                        <input
                                            id="productImages"
                                            style={{marginTop : "10px"}}
                                            name="productImages"
                                            type="file"
                                            onChange={((event) => handleImageUpload(event))}
                                            multiple
                                            label = "Product Images"
                                        />
                                </Grid>

                                <Grid container spacing={2} >

                                    <Grid item  xs={12} md={6}>
                                    <InputLabel style={{marginBottom : '8px'}}>Product Price</InputLabel>
                                    <TextField
                                        id="productPrice"
                                        name="productPrice"
                                        type="number"
                                        onChange={formik.handleChange}
                                        value={formik.values.productPrice}
                                        variant="outlined"
                                        color="primary"
                                        size="medium"
                                        label="Product Price"
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.productPrice && Boolean(formik.errors.productPrice)}
                                        helperText={formik.touched.productPrice && formik.errors.productPrice}
                                        sx = {{marginTop : 2}}
                                    />
                                    </Grid>

                                    <Grid item  xs={12} md={6} sx={{display : "flex"}}>
                                        <FormControl>
                                            <FormLabel> Availibility </FormLabel>
                                            <RadioGroup row>
                                                <FormControlLabel value="true" control={<Radio />} label="True"
                                                 
                                                 onBlur={formik.handleBlur}
                                                    error={formik.touched.availibility && Boolean(formik.errors.availibility)}
                                                    helperText={formik.touched.availibility && formik.errors.availibility}

                                                />
                                                <FormControlLabel value="false" control={<Radio />} label="False"
                                                  onBlur={formik.handleBlur}
                                                  error={formik.touched.availibility && Boolean(formik.errors.availibility)}
                                                  helperText={formik.touched.availibility && formik.errors.availibility}
                                                  
                                                  
                                                />
                                            </RadioGroup>
                                        </FormControl>
                                    </Grid>
                                </Grid>

                                <Grid container spacing={2} >

                                    <Grid item  xs={12} md={6}>  
                                    <InputLabel style={{marginBottom : '8px'}}>Shipping Info</InputLabel>   
                                    <TextField
                                        id="shippingInfo"
                                        name="shippingInfo"
                                        type="text"
                                        onChange={formik.handleChange}
                                        value={formik.values.shippingInfo}
                                        variant="outlined"
                                        color="primary"
                                        size="medium"
                                        label="Shipping Info"
                                    />
                                    </Grid>

                                    <Grid item  xs={12} md={6}>
                                    <InputLabel style={{marginBottom : '8px'}}>Product Dimensions</InputLabel>
                                    <TextField
                                        id="productDimensions"
                                        name="productDimensions"
                                        type="text"
                                        onChange={formik.handleChange}
                                        value={formik.values.productDimensions}
                                    />
                                    </Grid>

                                </Grid>


                                <Grid container spacing={2} >
                                    <Grid item  xs={12} md={6}>
                                    <InputLabel style={{marginBottom : '8px'}}>Product Weight</InputLabel>
                                    <TextField
                                        id="productWeight"
                                        name="productWeight"
                                        type="number"
                                        onChange={formik.handleChange}
                                        value={formik.values.productWeight}
                                        
                                    />
                                    </Grid>

                                    <Grid item  xs={12} md={6}> 
                                    <InputLabel style={{marginBottom : '8px'}}>Material And Construction</InputLabel>        
                                    <TextField

                                        id="materialAndConstruction"
                                        name="materialAndConstruction"
                                        type="text"
                                        onChange={formik.handleChange}
                                        value={formik.values.materialAndConstruction}
                                        
                                    />
                                    </Grid>

                                    <Grid item  xs={12} md={6}> 
                                    <InputLabel style={{marginBottom : '8px'}}>Product Features</InputLabel>    
                                    <TextField
                                        id="productFeatures"
                                        name="productFeatures"
                                        type="text"
                                        onChange={formik.handleChange}
                                        value={formik.values.productFeatures}
                                    
                                    />
                                    </Grid>     
                                </Grid>


                                
                                <Grid container spacing={2} >
                                    <Grid item  xs={12} md={6}> 
                                    <InputLabel style={{marginBottom : '8px'}}>Reviews Rating</InputLabel>
                                    <TextField
                                        id="reviewsRating"
                                        name="reviewsRating"
                                        type="number"
                                        onChange={formik.handleChange}
                                        value={formik.values.reviewsRating}
                                    
                                    />
                                    </Grid>

                                    <Grid item  xs={12} md={6}>
                                    <InputLabel style={{marginBottom : '8px'}}>Related Products</InputLabel>
                                    <TextField
                                        id="relatedProducts"
                                        name="relatedProducts"
                                        type="text"
                                        onChange={formik.handleChange}
                                        value={formik.values.relatedProducts}
                                        
                                    />
                                    </Grid>
                                </Grid>

                                <Grid container spacing={2} >
                                
                                    <Grid item  xs={12} md={6}> 
                                    <InputLabel style={{marginBottom : '8px'}}>Frequently Asked Questions</InputLabel>
                                    <TextField
                                        id="frequentlyAskedQuestions"
                                        name="frequentlyAskedQuestions"
                                        type="text"
                                        onChange={formik.handleChange}
                                        value={formik.values.frequentlyAskedQuestions}
                                    

                                    />
                                    </Grid>

                                    <Grid item  xs={12} md={6}> 
                                    <InputLabel style={{marginBottom : '8px'}}>Product Warranty</InputLabel>
                                    <TextField
                                        id="productWarranty"
                                        name="productWarranty"
                                        type="text"
                                        onChange={formik.handleChange}
                                        value={formik.values.productWarranty}
                                    
                                    />
                                    </Grid>

                                </Grid>

                                <Grid container spacing={2} >

                                <Grid item  xs={12} md={6}>
                                <InputLabel style={{marginBottom : '8px'}}>Product Return Policy</InputLabel>

                                <TextField
                                    id="productReturnPolicy"
                                    name="productReturnPolicy"
                                    type="text"
                                    onChange={formik.handleChange}
                                    value={formik.values.productReturnPolicy}
                                    
                                />
                                </Grid>

                                </Grid>

                                <Button 
                                type="submit"
                                variant="contained"

                                >Submit</Button>
                    </Grid>
                        </form>
                </Grid>
            </Grid>
    </>
  )
}

export default ProductAdd