# Resampling of Data from DICOM format into Nifti format

## Dependecies

Install the following depedencies

`pip install monai torch torchvision nibabel`

Download config file also from the github

### Steps

1. Generate csv file containing metadata about DICOM

   `prepare_csv.py`

3. Generate json file with path to DICOM images

   `prepare_dicom.py`

5. `luna16_prepare_env.py file`

6. `luna16_prepare_image.py file`
