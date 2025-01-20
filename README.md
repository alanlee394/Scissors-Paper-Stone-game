# Resampling of Data from DICOM format into Nifti format

## Dependecies

Install the following depedencies

`pip install monai torch torchvision nibabel`

Download config file also from the github

### Steps

1. Generate csv file containing metadata about DICOM
   `prepare_csv.py`

2. Generate json file with path to DICOM images
   `prepare_dicom.py`

3. `luna16_prepare_env.py file`

4. `luna16_prepare_image.py file`
