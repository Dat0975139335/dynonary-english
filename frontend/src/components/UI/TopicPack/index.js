import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TopicSelect from '../TopicSelect';
import { TOPIC_OPTIONS } from 'constant/topics';
import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import SelectCustom from 'components/UI/SelectCustom';
import useStyle from './style';


const formId = 'wordPackForm';

function addAllOption(optionList = []) {
    return [{ value: '-1', label: 'Tất cả' }, ...optionList];
}


function TopicPack(props) {
  const { 
    onChoose,
    onCancel,
    open,
    topicMultiples,
    title,
    okBtnText,
    cancelBtnText,
    okBtnProps,
    cancelBtnProps,
    } = props;
    
  const classes = useStyle();
  const topics = useRef([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { target } = e;
    const topic = target.topic?.value || '-1';

    onChoose({
      topics: topicMultiples ? topics.current : topic === '-1' ? [] : [topic],
    });
  };
  return (
    <Dialog 
        classes={{ paper: classes.dialogPaper}}
        maxWidth="md"
        fullWidth
        open={open}
    >
      <DialogTitle classes={{ root: classes.title}}>{title}</DialogTitle>

      <DialogContent dividers classes={{ dividers: classes.breakLine }}>
        <form id={formId} onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            {topicMultiples ? (
              <TopicSelect
                onChange={(topicList) => (topics.current = topicList)}
                buttonWrapper={(props) => (
                  <Grid {...props} item xs={12} md={6} />
                )}
                tagsWrapper={(props) => <Grid {...props} item xs={12} />}
              />
            ) : (
              <Grid item xs={12} md={6}>
                <SelectCustom
                  label="Chủ đề"
                  className="w-100"
                  options={addAllOption(TOPIC_OPTIONS)}
                  inputProps={{ name: 'topic' }}
                />
              </Grid>
            )}
            {Boolean(props.children) && (
              <Grid item xs={12} md={6}>
                {props.children}
              </Grid>
            )}
          </Grid>
        </form>
      </DialogContent>

      <DialogActions>
        <Button
          onClick={onCancel}
          className="_btn _btn-stand"
          variant="outlined"
          {...cancelBtnProps}>
          {cancelBtnText}
        </Button>
        <Button
          autoFocus
          disableFocusRipple
          component="button"
          type="submit"
          form={formId}
          className="_btn _btn-primary"
          variant="contained"
          {...okBtnProps}>
          {okBtnText}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

TopicPack.propTypes = {
  cancelBtnProps: PropTypes.object,
  cancelBtnText: PropTypes.string,
  okBtnProps: PropTypes.object,
  okBtnText: PropTypes.string,
  onCancel: PropTypes.func,
  onChoose: PropTypes.func,
  open: PropTypes.bool,
  title: PropTypes.string,
  topicMultiples: PropTypes.bool,
};

TopicPack.defaultProps = {
    onChoose: function () {},
    open: true,
    topicMultiples: true,
    title: 'Gói chủ đề',
    okBtnText: 'Ok',
    cancelBtnText: 'Đóng',
    okBtnProps: {},
    cancelBtnProps: {},
  };

  export default TopicPack;
  